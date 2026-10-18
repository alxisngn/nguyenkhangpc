/**
 * NGUYÊN KHANG PC - LOGIC HỆ THỐNG (js/main.js)
 * Tương thích với mọi trang: index.html, category.html, product.html, cart.html, checkout.html
 */

(function () {
  "use strict";

  var CART_KEY = "nkpc_cart";

  // =========================================================================
  // 1. CÁC HÀM TIỆN ÍCH CHUNG (FORMAT GIÁ, CHUẨN HÓA TÌM KIẾM, ICON FALLBACK)
  // =========================================================================

  function formatPrice(price) {
    var num = Number(price) || 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Chuẩn hóa chuỗi phục vụ tìm kiếm: chữ thường, bỏ dấu tiếng Việt (đ -> d), chỉ giữ chữ/số
  function normalizeCompact(str) {
    if (!str) return "";
    return String(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]/g, "");
  }

  // Tách từ khóa tìm kiếm theo khoảng trắng rồi chuẩn hóa từng từ
  function tokenizeQuery(query) {
    if (!query) return [];
    var rawTokens = String(query).trim().split(/\s+/);
    var tokens = [];
    for (var i = 0; i < rawTokens.length; i++) {
      var clean = normalizeCompact(rawTokens[i]);
      if (clean) tokens.push(clean);
    }
    return tokens;
  }

  function getFallbackIcon(product) {
    if (!product) return "fa-computer";
    if (product.cat === "pc-gaming") return "fa-computer";
    if (product.cat === "pc-do-hoa") return "fa-desktop";
    if (product.cat === "laptop") return "fa-laptop";
    if (product.cat === "man-hinh") return "fa-tv";
    if (product.cat === "linh-kien") {
      if (product.sub === "cpu") return "fa-microchip";
      if (product.sub === "mainboard") return "fa-server";
      if (product.sub === "ram") return "fa-memory";
      if (product.sub === "vga") return "fa-display";
      if (product.sub === "storage") return "fa-hard-drive";
      if (product.sub === "nguon-case-tan") return "fa-fan";
    }
    return "fa-microchip";
  }

  function getProductById(id) {
    if (typeof PRODUCTS === "undefined" || !Array.isArray(PRODUCTS)) return null;
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  // =========================================================================
  // 2. QUẢN LÝ GIỎ HÀNG (localStorage key: "nkpc_cart" -> [{id, qty}])
  // =========================================================================

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      // Bỏ qua nếu trình duyệt chặn localStorage
    }
  }

  function getCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];

      // Loại bỏ các mục có id không còn tồn tại trong PRODUCTS và lưu lại giỏ đã làm sạch
      if (typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)) {
        var cleaned = [];
        var changed = false;
        for (var i = 0; i < parsed.length; i++) {
          var item = parsed[i];
          var qty = Number(item && item.qty) || 0;
          if (item && item.id && qty > 0 && getProductById(item.id)) {
            cleaned.push({ id: item.id, qty: qty });
          } else {
            changed = true;
          }
        }
        if (changed) {
          saveCart(cleaned);
        }
        return cleaned;
      }

      return parsed;
    } catch (e) {
      return [];
    }
  }

  function updateCartCount() {
    var cart = getCart();
    var totalQty = 0;
    for (var i = 0; i < cart.length; i++) {
      totalQty += Number(cart[i].qty) || 0;
    }
    var countEl = document.getElementById("cart-count");
    if (countEl) {
      countEl.textContent = String(totalQty);
    }
  }

  function showToast(message) {
    var existing = document.getElementById("nkpc-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.id = "nkpc-toast";
    toast.className =
      "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary-dark text-white text-xs md:text-sm font-semibold px-4 py-3 rounded-xl shadow-2xl border border-accent flex items-center gap-2.5";
    toast.innerHTML =
      '<i class="fa-solid fa-circle-check text-accent text-base"></i>' +
      "<span>" + escapeHtml(message) + "</span>";

    document.body.appendChild(toast);
    setTimeout(function () {
      if (toast && toast.parentNode) {
        toast.remove();
      }
    }, 2400);
  }

  function addToCart(id, qty) {
    var amount = parseInt(qty, 10);
    if (isNaN(amount) || amount < 1) amount = 1;

    var product = getProductById(id);
    if (!product) return;

    var cart = getCart();
    var found = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].qty = (Number(cart[i].qty) || 0) + amount;
        found = true;
        break;
      }
    }
    if (!found) {
      cart.push({ id: id, qty: amount });
    }

    saveCart(cart);
    updateCartCount();
    showToast("Đã thêm vào giỏ: " + product.name);
  }

  // Xuất hàm ra phạm vi toàn cục (window) để có thể gọi từ nơi khác nếu cần
  window.addToCart = addToCart;
  window.updateCartCount = updateCartCount;

  // =========================================================================
  // 3. TẠO MARKUP PRODUCT CARD CHUẨN (GIỐNG HỆT CARD MẪU TRONG INDEX.HTML)
  // =========================================================================

  function renderProductCard(product) {
    var iconClass = getFallbackIcon(product);
    var tags = Array.isArray(product.tags) ? product.tags.slice(0, 3) : [];
    var tagsHtml = "";

    for (var i = 0; i < tags.length; i++) {
      tagsHtml +=
        '<span class="text-[10px] font-semibold bg-sky-50 text-primary-light border border-sky-200 rounded px-1.5 py-0.5">' +
        escapeHtml(tags[i]) +
        "</span>";
    }

    var detailUrl = "product.html?id=" + encodeURIComponent(product.id);
    var hasImage = product.image && String(product.image).trim() !== "";

    var mediaHtml = hasImage
      ? '<img src="' +
        escapeHtml(product.image) +
        '" alt="' +
        escapeHtml(product.name) +
        '" loading="lazy" class="w-full h-full object-cover" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
        '<span style="display:none" class="w-full h-full items-center justify-center"><i class="fa-solid ' +
        iconClass +
        ' text-6xl md:text-7xl text-primary-light/70"></i></span>'
      : '<i class="fa-solid ' + iconClass + ' text-6xl md:text-7xl text-primary-light/70"></i>';

    return (
      '<article class="product-card relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden">' +
      '<a href="' +
      detailUrl +
      '" class="block aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">' +
      mediaHtml +
      "</a>" +
      '<div class="flex flex-col flex-1 p-3">' +
      '<h3 class="text-[13px] md:text-sm font-semibold text-slate-800 leading-snug line-clamp-2 min-h-[2.5rem]">' +
      '<a href="' +
      detailUrl +
      '" class="hover:text-accent transition">' +
      escapeHtml(product.name) +
      "</a>" +
      "</h3>" +
      '<div class="mt-2 flex flex-wrap gap-1.5">' +
      tagsHtml +
      "</div>" +
      '<div class="mt-auto pt-3">' +
      '<div class="text-base md:text-lg font-extrabold text-accent">' +
      formatPrice(product.price) +
      "</div>" +
      '<div class="mt-2 grid grid-cols-5 gap-1.5">' +
      '<button type="button" data-add-to-cart="' +
      escapeHtml(product.id) +
      '" class="col-span-3 bg-accent hover:bg-accent-hover text-white text-[11px] md:text-xs font-bold py-2 rounded-lg transition"><i class="fa-solid fa-cart-plus mr-1"></i>Thêm vào giỏ</button>' +
      '<a href="' +
      detailUrl +
      '" class="col-span-2 text-center bg-primary hover:bg-primary-light text-white text-[11px] md:text-xs font-bold py-2 rounded-lg transition">Chi tiết</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  // =========================================================================
  // 4. RENDER TRANG CHỦ (INDEX.HTML)
  // =========================================================================

  function initHomePage() {
    if (typeof PRODUCTS === "undefined" || !Array.isArray(PRODUCTS)) return;

    var sections = [
      { gridId: "home-pc-gaming", cat: "pc-gaming" },
      { gridId: "home-pc-dohoa", cat: "pc-do-hoa" },
      { gridId: "home-man-hinh", cat: "man-hinh" },
      { gridId: "home-linh-kien", cat: "linh-kien" }
    ];

    for (var s = 0; s < sections.length; s++) {
      var gridEl = document.getElementById(sections[s].gridId);
      if (!gridEl) continue;

      var targetCat = sections[s].cat;
      var featuredItems = [];
      var fallbackItems = [];

      for (var i = 0; i < PRODUCTS.length; i++) {
        var p = PRODUCTS[i];
        if (p.cat === targetCat) {
          if (p.featured) {
            featuredItems.push(p);
          } else {
            fallbackItems.push(p);
          }
        }
      }

      var list = featuredItems.concat(fallbackItems).slice(0, 4);
      var html = "";
      for (var j = 0; j < list.length; j++) {
        html += renderProductCard(list[j]);
      }

      gridEl.innerHTML = html;
    }
  }

  // =========================================================================
  // 5. RENDER TRANG DANH MỤC & TÌM KIẾM (CATEGORY.HTML)
  // =========================================================================

  var CAT_NAMES = {
    "pc-gaming": "PC Gaming",
    "pc-do-hoa": "PC Đồ Họa / Văn Phòng",
    "laptop": "Laptop Chính Hãng",
    "man-hinh": "Màn Hình Máy Tính",
    "linh-kien": "Linh Kiện PC"
  };

  var SUB_NAMES = {
    "cpu": "Vi xử lý (CPU)",
    "mainboard": "Bo mạch chủ (Mainboard)",
    "ram": "Bộ nhớ RAM",
    "vga": "Card màn hình (VGA)",
    "storage": "Ổ cứng SSD / HDD",
    "nguon-case-tan": "Nguồn / Case / Tản nhiệt"
  };

  function getPriceRangesByCat(cat) {
    if (cat === "pc-gaming" || cat === "pc-do-hoa") {
      return [
        { label: "Dưới 10 triệu", value: "0-10000000" },
        { label: "10 - 15 triệu", value: "10000000-15000000" },
        { label: "15 - 25 triệu", value: "15000000-25000000" },
        { label: "Trên 25 triệu", value: "25000000-" }
      ];
    }
    if (cat === "linh-kien") {
      return [
        { label: "Dưới 1,5 triệu", value: "0-1500000" },
        { label: "1,5 - 3 triệu", value: "1500000-3000000" },
        { label: "3 - 6 triệu", value: "3000000-6000000" },
        { label: "Trên 6 triệu", value: "6000000-" }
      ];
    }
    if (cat === "man-hinh") {
      return [
        { label: "Dưới 3 triệu", value: "0-3000000" },
        { label: "3 - 6 triệu", value: "3000000-6000000" },
        { label: "Trên 6 triệu", value: "6000000-" }
      ];
    }
    if (cat === "laptop") {
      return [
        { label: "Dưới 15 triệu", value: "0-15000000" },
        { label: "15 - 25 triệu", value: "15000000-25000000" },
        { label: "Trên 25 triệu", value: "25000000-" }
      ];
    }
    // Mặc định khi không có ?cat= (tìm kiếm / tất cả)
    return [
      { label: "Dưới 2 triệu", value: "0-2000000" },
      { label: "2 - 5 triệu", value: "2000000-5000000" },
      { label: "5 - 15 triệu", value: "5000000-15000000" },
      { label: "Trên 15 triệu", value: "15000000-" }
    ];
  }

  function initCategoryPage() {
    var gridEl = document.getElementById("category-products");
    if (!gridEl || typeof PRODUCTS === "undefined") return;

    var PAGE_SIZE = 24;
    var visibleCount = PAGE_SIZE;

    var params = new URLSearchParams(window.location.search);
    var catParam = (params.get("cat") || "").trim();
    var subParam = (params.get("sub") || "").trim();
    var qParam = (params.get("q") || "").trim();
    var queryTokens = tokenizeQuery(qParam);

    // Điền lại từ khóa vào ô tìm kiếm nếu có ?q=
    var searchInput = document.getElementById("search-input");
    if (searchInput && qParam) {
      searchInput.value = qParam;
    }

    // Cập nhật tiêu đề danh mục
    var titleEl = document.getElementById("category-title");
    if (titleEl) {
      if (qParam) {
        titleEl.textContent = 'Kết quả tìm kiếm: "' + qParam + '"';
      } else if (subParam && SUB_NAMES[subParam]) {
        titleEl.textContent = SUB_NAMES[subParam];
      } else if (catParam && CAT_NAMES[catParam]) {
        titleEl.textContent = CAT_NAMES[catParam];
      } else {
        titleEl.textContent = "Tất Cả Sản Phẩm";
      }
    }

    // Lọc danh sách gốc theo URL (?cat=, ?sub=, ?q=)
    var baseList = PRODUCTS.filter(function (p) {
      if (catParam && p.cat !== catParam) return false;
      if (subParam && p.sub !== subParam) return false;
      if (queryTokens.length > 0) {
        var subLabel = p.sub && SUB_NAMES[p.sub] ? SUB_NAMES[p.sub] : "";
        var haystack = normalizeCompact(
          (p.name || "") +
            " " +
            (p.brand || "") +
            " " +
            (Array.isArray(p.tags) ? p.tags.join(" ") : "") +
            " " +
            (p.sub || "") +
            " " +
            subLabel
        );
        for (var t = 0; t < queryTokens.length; t++) {
          if (haystack.indexOf(queryTokens[t]) === -1) return false;
        }
      }
      return true;
    });

    var selectedBrand = "all";
    var selectedPrice = "all";
    var selectedSort = "default";

    // Tự động tạo các nút lọc theo Hãng (Brand) trong #filter-brands
    var brandContainer = document.getElementById("filter-brands");
    if (brandContainer) {
      var brands = [];
      for (var i = 0; i < baseList.length; i++) {
        var b = baseList[i].brand;
        if (b && brands.indexOf(b) === -1) brands.push(b);
      }
      var brandHtml =
        '<button type="button" data-brand="all" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-accent text-white transition">Tất cả</button>';
      for (var k = 0; k < brands.length; k++) {
        brandHtml +=
          '<button type="button" data-brand="' +
          escapeHtml(brands[k]) +
          '" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition">' +
          escapeHtml(brands[k]) +
          "</button>";
      }
      brandContainer.innerHTML = brandHtml;

      brandContainer.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-brand]");
        if (!btn) return;
        selectedBrand = btn.getAttribute("data-brand") || "all";
        visibleCount = PAGE_SIZE;

        var allBtns = brandContainer.querySelectorAll("[data-brand]");
        for (var m = 0; m < allBtns.length; m++) {
          allBtns[m].className =
            allBtns[m].getAttribute("data-brand") === selectedBrand
              ? "px-3 py-1.5 rounded-lg text-xs font-bold bg-accent text-white transition"
              : "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
        }
        applyFilters();
      });
    }

    // Tự sinh các nút lọc khoảng giá trong #filter-price theo danh mục đang xem
    var priceContainer = document.getElementById("filter-price");
    if (priceContainer) {
      var ranges = getPriceRangesByCat(catParam);
      var priceHtml =
        '<button type="button" data-price="all" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-accent text-white transition">Tất cả giá</button>';
      for (var r = 0; r < ranges.length; r++) {
        priceHtml +=
          '<button type="button" data-price="' +
          escapeHtml(ranges[r].value) +
          '" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition">' +
          escapeHtml(ranges[r].label) +
          "</button>";
      }
      priceContainer.innerHTML = priceHtml;

      priceContainer.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-price]");
        if (!btn) return;
        selectedPrice = btn.getAttribute("data-price") || "all";
        visibleCount = PAGE_SIZE;

        var allBtns = priceContainer.querySelectorAll("[data-price]");
        for (var m = 0; m < allBtns.length; m++) {
          allBtns[m].className =
            allBtns[m].getAttribute("data-price") === selectedPrice
              ? "px-3 py-1.5 rounded-lg text-xs font-bold bg-accent text-white transition"
              : "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
        }
        applyFilters();
      });
    }

    // Lắng nghe sắp xếp giá (#sort-select)
    var sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        selectedSort = sortSelect.value;
        visibleCount = PAGE_SIZE;
        applyFilters();
      });
    }

    // Chuẩn bị nút "Xem thêm" (#load-more, tự tạo dưới lưới nếu chưa có)
    var loadMoreBtn = document.getElementById("load-more");
    if (!loadMoreBtn && gridEl.parentNode) {
      var wrap = document.createElement("div");
      wrap.className = "mt-6 text-center";
      loadMoreBtn = document.createElement("button");
      loadMoreBtn.id = "load-more";
      loadMoreBtn.type = "button";
      loadMoreBtn.className =
        "hidden inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl shadow transition";
      wrap.appendChild(loadMoreBtn);
      gridEl.parentNode.insertBefore(wrap, gridEl.nextSibling);
    }

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        visibleCount += PAGE_SIZE;
        applyFilters();
      });
    }

    function applyFilters() {
      var filtered = baseList.filter(function (p) {
        if (selectedBrand !== "all" && p.brand !== selectedBrand) return false;
        if (selectedPrice && selectedPrice !== "all") {
          var parts = selectedPrice.split("-");
          var min = parts[0] !== "" ? Number(parts[0]) : 0;
          var max = parts.length > 1 && parts[1] !== "" ? Number(parts[1]) : Infinity;
          // Khoảng nửa mở [min, max) để không trùng biên
          if (p.price < min || p.price >= max) return false;
        }
        return true;
      });

      if (selectedSort === "price-asc") {
        filtered.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (selectedSort === "price-desc") {
        filtered.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      var countEl = document.getElementById("category-count");
      if (countEl) {
        countEl.textContent = filtered.length + " sản phẩm";
      }

      if (filtered.length === 0) {
        gridEl.innerHTML =
          '<div class="col-span-2 md:col-span-4 py-12 text-center text-slate-500">' +
          '<i class="fa-solid fa-box-open text-4xl text-slate-300 mb-3 block"></i>' +
          '<p class="font-semibold">Không tìm thấy sản phẩm phù hợp.</p>' +
          "</div>";
        if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
        return;
      }

      var slice = filtered.slice(0, visibleCount);
      var html = "";
      for (var i = 0; i < slice.length; i++) {
        html += renderProductCard(slice[i]);
      }
      gridEl.innerHTML = html;

      if (loadMoreBtn) {
        var remaining = filtered.length - slice.length;
        if (remaining > 0) {
          loadMoreBtn.innerHTML =
            '<i class="fa-solid fa-angles-down"></i><span>Xem thêm (' +
            remaining +
            " sản phẩm)</span>";
          loadMoreBtn.classList.remove("hidden");
        } else {
          loadMoreBtn.classList.add("hidden");
        }
      }
    }

    applyFilters();
  }

  // =========================================================================
  // 6. RENDER TRANG CHI TIẾT SẢN PHẨM (PRODUCT.HTML)
  // =========================================================================

  function initProductPage() {
    var detailContainer = document.getElementById("product-detail");
    if (!detailContainer || typeof PRODUCTS === "undefined") return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var product = id ? getProductById(id) : null;

    var relatedEl = document.getElementById("related-products");

    if (!product) {
      document.title = "Không tìm thấy sản phẩm - Nguyên Khang PC";
      detailContainer.innerHTML =
        '<div class="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center">' +
        '<i class="fa-solid fa-circle-exclamation text-5xl text-accent mb-4 block"></i>' +
        '<h1 class="text-lg md:text-xl font-extrabold text-slate-800">Không tìm thấy sản phẩm</h1>' +
        '<p class="mt-2 text-sm text-slate-500">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã ngừng kinh doanh.</p>' +
        '<a href="index.html" class="mt-5 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl shadow transition">' +
        '<i class="fa-solid fa-house"></i><span>Quay về trang chủ</span>' +
        "</a>" +
        "</div>";
      if (relatedEl) relatedEl.innerHTML = "";
      return;
    }

    document.title = product.name + " - Nguyên Khang PC";

    var iconClass = getFallbackIcon(product);
    var tagsHtml = "";
    if (Array.isArray(product.tags)) {
      for (var i = 0; i < product.tags.length; i++) {
        tagsHtml +=
          '<span class="text-xs font-semibold bg-sky-50 text-primary-light border border-sky-200 rounded-md px-2.5 py-1">' +
          escapeHtml(product.tags[i]) +
          "</span>";
      }
    }

    var specsHtml = "";
    if (product.specs && typeof product.specs === "object") {
      var keys = Object.keys(product.specs);
      for (var k = 0; k < keys.length; k++) {
        var keyName = keys[k];
        var rowBg = k % 2 === 0 ? "bg-slate-50" : "bg-white";
        specsHtml +=
          '<tr class="' +
          rowBg +
          ' border-b border-slate-200">' +
          '<td class="py-2.5 px-3 font-semibold text-slate-700 w-2/5 text-xs md:text-sm">' +
          escapeHtml(keyName) +
          "</td>" +
          '<td class="py-2.5 px-3 text-slate-800 text-xs md:text-sm">' +
          escapeHtml(product.specs[keyName]) +
          "</td>" +
          "</tr>";
      }
    }

    var mediaHtml =
      product.image && String(product.image).trim() !== ""
        ? '<img src="' +
          escapeHtml(product.image) +
          '" alt="' +
          escapeHtml(product.name) +
          '" class="w-full h-full object-cover" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
          '<span style="display:none" class="w-full h-full items-center justify-center"><i class="fa-solid ' +
          iconClass +
          ' text-8xl text-primary-light/70"></i></span>'
        : '<i class="fa-solid ' + iconClass + ' text-8xl text-primary-light/70"></i>';

    detailContainer.innerHTML =
      '<div class="grid md:grid-cols-12 gap-6 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200">' +
      '<div class="md:col-span-5">' +
      '<div class="aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden border border-slate-200">' +
      mediaHtml +
      "</div>" +
      "</div>" +
      '<div class="md:col-span-7 flex flex-col">' +
      '<div class="text-xs font-bold uppercase text-primary-light tracking-wider">' +
      escapeHtml(product.brand) +
      "</div>" +
      '<h1 class="mt-1 text-xl md:text-2xl font-extrabold text-slate-900 leading-snug">' +
      escapeHtml(product.name) +
      "</h1>" +
      '<div class="mt-3 flex flex-wrap gap-2">' +
      tagsHtml +
      "</div>" +
      '<div class="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200">' +
      '<div class="text-xs text-slate-500 font-medium">Giá bán tại Nguyên Khang PC:</div>' +
      '<div class="text-2xl md:text-3xl font-black text-accent mt-0.5">' +
      formatPrice(product.price) +
      "</div>" +
      "</div>" +
      '<div class="mt-5 flex flex-wrap gap-3">' +
      '<button type="button" data-add-to-cart="' +
      escapeHtml(product.id) +
      '" class="flex-1 min-w-[180px] bg-accent hover:bg-accent-hover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2">' +
      '<i class="fa-solid fa-cart-plus"></i><span>THÊM VÀO GIỎ HÀNG</span>' +
      "</button>" +
      '<a href="https://zalo.me/0708715678" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2">' +
      '<i class="fa-solid fa-comments"></i><span>Tư vấn qua Zalo</span>' +
      "</a>" +
      "</div>" +
      '<div class="mt-6">' +
      '<h2 class="text-sm font-extrabold uppercase text-primary mb-2"><i class="fa-solid fa-list-check text-accent mr-1.5"></i>Thông số kỹ thuật</h2>' +
      '<div class="rounded-xl overflow-hidden border border-slate-200">' +
      '<table class="w-full border-collapse">' +
      "<tbody>" +
      specsHtml +
      "</tbody>" +
      "</table>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    // Render sản phẩm cùng danh mục nếu có khung #related-products
    if (relatedEl) {
      var related = PRODUCTS.filter(function (p) {
        return p.cat === product.cat && p.id !== product.id;
      }).slice(0, 4);
      var relHtml = "";
      for (var r = 0; r < related.length; r++) {
        relHtml += renderProductCard(related[r]);
      }
      relatedEl.innerHTML = relHtml;
    }
  }

  // =========================================================================
  // 7. RENDER TRANG GIỎ HÀNG (CART.HTML)
  // =========================================================================

  function initCartPage() {
    var cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    function renderCart() {
      var cart = getCart();
      var totalEl = document.getElementById("cart-total");
      var total = 0;

      if (cart.length === 0) {
        cartContainer.innerHTML =
          '<div class="p-8 text-center text-slate-500">' +
          '<i class="fa-solid fa-cart-shopping text-5xl text-slate-300 mb-3 block"></i>' +
          '<p class="font-semibold text-base">Giỏ hàng của bạn đang trống</p>' +
          '<a href="index.html" class="mt-4 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold px-5 py-2.5 rounded-lg transition">Tiếp tục chọn linh kiện</a>' +
          "</div>";
        if (totalEl) totalEl.textContent = "0đ";
        return;
      }

      var html = "";
      for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var product = getProductById(item.id);
        if (!product) continue;

        var qty = Number(item.qty) || 1;
        var lineTotal = product.price * qty;
        total += lineTotal;

        html +=
          '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-slate-200">' +
          '<div class="flex items-center gap-3 flex-1">' +
          '<a href="product.html?id=' +
          encodeURIComponent(product.id) +
          '" class="w-16 h-16 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center text-primary-light">' +
          '<i class="fa-solid ' +
          getFallbackIcon(product) +
          ' text-2xl"></i>' +
          "</a>" +
          "<div>" +
          '<a href="product.html?id=' +
          encodeURIComponent(product.id) +
          '" class="font-bold text-sm text-slate-800 hover:text-accent transition">' +
          escapeHtml(product.name) +
          "</a>" +
          '<div class="text-xs font-bold text-accent mt-1">' +
          formatPrice(product.price) +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="flex items-center justify-between sm:justify-end gap-4">' +
          '<div class="flex items-center border border-slate-300 rounded-lg overflow-hidden">' +
          '<button type="button" data-cart-dec="' +
          escapeHtml(product.id) +
          '" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold text-sm">-</button>' +
          '<span class="px-3 py-1 text-sm font-bold">' +
          qty +
          "</span>" +
          '<button type="button" data-cart-inc="' +
          escapeHtml(product.id) +
          '" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 font-bold text-sm">+</button>' +
          "</div>" +
          '<div class="font-extrabold text-sm text-slate-900 min-w-[100px] text-right">' +
          formatPrice(lineTotal) +
          "</div>" +
          '<button type="button" data-cart-remove="' +
          escapeHtml(product.id) +
          '" class="text-slate-400 hover:text-red-600 transition px-2" aria-label="Xóa">' +
          '<i class="fa-solid fa-trash-can"></i>' +
          "</button>" +
          "</div>" +
          "</div>";
      }

      cartContainer.innerHTML = html;
      if (totalEl) totalEl.textContent = formatPrice(total);
    }

    cartContainer.addEventListener("click", function (e) {
      var incBtn = e.target.closest("[data-cart-inc]");
      var decBtn = e.target.closest("[data-cart-dec]");
      var rmBtn = e.target.closest("[data-cart-remove]");

      var cart = getCart();
      if (incBtn) {
        var incId = incBtn.getAttribute("data-cart-inc");
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].id === incId) cart[i].qty += 1;
        }
      } else if (decBtn) {
        var decId = decBtn.getAttribute("data-cart-dec");
        for (var j = 0; j < cart.length; j++) {
          if (cart[j].id === decId) {
            cart[j].qty -= 1;
            if (cart[j].qty <= 0) cart.splice(j, 1);
            break;
          }
        }
      } else if (rmBtn) {
        var rmId = rmBtn.getAttribute("data-cart-remove");
        cart = cart.filter(function (c) {
          return c.id !== rmId;
        });
      } else {
        return;
      }

      saveCart(cart);
      updateCartCount();
      renderCart();
    });

    renderCart();
  }

  // =========================================================================
  // 8. KHỞI TẠO SỰ KIỆN TOÀN CỤC KHI DOM LOAD XONG
  // =========================================================================

  document.addEventListener("DOMContentLoaded", function () {
    // 1. Luôn cập nhật số lượng giỏ hàng trên Header ở mọi trang
    updateCartCount();

    // 2. Event delegation cho mọi nút [data-add-to-cart]
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-add-to-cart]");
      if (!btn) return;
      e.preventDefault();
      var productId = btn.getAttribute("data-add-to-cart");
      if (productId) {
        addToCart(productId, 1);
      }
    });

    // 3. Khởi tạo các trang tương ứng nếu phần tử tồn tại
    initHomePage();
    initCategoryPage();
    initProductPage();
    initCartPage();
  });
})();