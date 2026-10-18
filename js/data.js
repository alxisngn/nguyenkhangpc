/**
 * NGUYÊN KHANG PC - DỮ LIỆU SẢN PHẨM (js/data.js)
 * Quy ước:
 * - cat: "pc-gaming" | "pc-do-hoa" | "laptop" | "man-hinh" | "linh-kien"
 * - sub (chỉ dùng khi cat === "linh-kien", còn lại để ""):
 *   "cpu" | "mainboard" | "ram" | "vga" | "storage" | "nguon-case-tan"
 */

const PRODUCTS = [
  // =========================================================================
  // 1. PC GAMING (4 sản phẩm Featured trên Trang chủ)
  // =========================================================================
  {
    id: "pc-gaming-1",
    name: "PC Gaming NK Starter - i5-12400F / RTX 3060 / 16GB / SSD 512GB",
    cat: "pc-gaming",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 15990000,
    image: "images/pc-gaming-1.jpg",
    tags: ["i5-12400F", "RTX 3060", "16GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i5-12400F (6 nhân 12 luồng, up to 4.4GHz)",
      "Bo mạch chủ": "Mainboard B660M (ASUS / Gigabyte / MSI)",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce RTX 3060 12GB GDDR6",
      "Ổ cứng": "SSD 512GB NVMe PCIe",
      "Nguồn (PSU)": "650W Công suất thực 80 Plus",
      "Bảo hành": "Theo từng linh kiện tại Nguyên Khang PC"
    },
    featured: true
  },
  {
    id: "pc-gaming-2",
    name: "PC Gaming NK Pro - i5-13400F / RTX 4060 8GB / 16GB / SSD 512GB",
    cat: "pc-gaming",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 19490000,
    image: "images/pc-gaming-2.jpg",
    tags: ["i5-13400F", "RTX 4060", "16GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i5-13400F (10 nhân 16 luồng, up to 4.6GHz)",
      "Bo mạch chủ": "Mainboard B760M DDR4",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "Ổ cứng": "SSD 512GB NVMe Gen4",
      "Nguồn (PSU)": "650W 80 Plus Bronze",
      "Bảo hành": "Chính hãng tại Nguyên Khang PC"
    },
    featured: true
  },
  {
    id: "pc-gaming-3",
    name: "PC Gaming NK Elite - i7-12700F / RTX 3060 Ti 8GB / 32GB / SSD 1TB",
    cat: "pc-gaming",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 23900000,
    image: "images/pc-gaming-3.jpg",
    tags: ["i7-12700F", "RTX 3060Ti", "32GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i7-12700F (12 nhân 20 luồng, up to 4.9GHz)",
      "Bo mạch chủ": "Mainboard B760M Tản nhiệt VRM",
      "Bộ nhớ RAM": "32GB (2x16GB) DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce RTX 3060 Ti 8GB GDDR6",
      "Ổ cứng": "SSD 1TB NVMe PCIe",
      "Nguồn (PSU)": "750W 80 Plus Bronze",
      "Bảo hành": "Chính hãng tại Nguyên Khang PC"
    },
    featured: true
  },
  {
    id: "pc-gaming-4",
    name: "PC Gaming NK Esport - i3-12100F / GTX 1660 Super 6GB / 16GB / SSD 512GB",
    cat: "pc-gaming",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 9890000,
    image: "images/pc-gaming-4.jpg",
    tags: ["i3-12100F", "GTX 1660S", "16GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i3-12100F (4 nhân 8 luồng, up to 4.3GHz)",
      "Bo mạch chủ": "Mainboard H610M (ASUS / Gigabyte / MSI)",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce GTX 1660 Super 6GB GDDR6",
      "Ổ cứng": "SSD 512GB NVMe",
      "Nguồn (PSU)": "550W Công suất thực",
      "Bảo hành": "Chính hãng tại Nguyên Khang PC"
    },
    featured: true
  },

  // =========================================================================
  // 2. PC ĐỒ HỌA & VĂN PHÒNG (4 sản phẩm Featured trên Trang chủ)
  // =========================================================================
  {
    id: "pc-do-hoa-1",
    name: "PC Văn Phòng Plus - i5-12400 / 16GB / SSD 512GB / Intel UHD",
    cat: "pc-do-hoa",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 9490000,
    image: "images/pc-do-hoa-1.jpg",
    tags: ["i5-12400", "UHD 730", "16GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i5-12400 (6 nhân 12 luồng, tích hợp iGPU UHD 730)",
      "Bo mạch chủ": "Mainboard H610M / B660M",
      "Bộ nhớ RAM": "16GB DDR4 3200MHz",
      "Đồ họa": "Intel UHD Graphics 730",
      "Ổ cứng": "SSD 512GB NVMe",
      "Nguồn & Case": "PSU 450W + Case Văn phòng gọn nhẹ"
    },
    featured: true
  },
  {
    id: "pc-do-hoa-2",
    name: "PC Đồ Họa NK Design - i5-13500 / RTX 3050 6GB / 32GB / SSD 1TB",
    cat: "pc-do-hoa",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 16290000,
    image: "images/pc-do-hoa-2.jpg",
    tags: ["i5-13500", "RTX 3050", "32GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i5-13500 (14 nhân 20 luồng, up to 4.8GHz)",
      "Bo mạch chủ": "Mainboard B760M",
      "Bộ nhớ RAM": "32GB DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce RTX 3050 6GB GDDR6",
      "Ổ cứng": "SSD 1TB NVMe PCIe",
      "Nguồn (PSU)": "600W 80 Plus"
    },
    featured: true
  },
  {
    id: "pc-do-hoa-3",
    name: "PC Workstation NK Studio - i7-12700 / RTX 3060 12GB / 32GB / SSD 1TB",
    cat: "pc-do-hoa",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 22900000,
    image: "images/pc-do-hoa-3.jpg",
    tags: ["i7-12700", "RTX 3060 12G", "32GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i7-12700 (12 nhân 20 luồng, có iGPU hỗ trợ QuickSync)",
      "Bo mạch chủ": "Mainboard B760M (ASUS / Gigabyte / MSI)",
      "Bộ nhớ RAM": "32GB DDR4 3200MHz",
      "Card màn hình": "NVIDIA GeForce RTX 3060 12GB GDDR6 (Tối ưu Render / AI)",
      "Ổ cứng": "SSD 1TB NVMe Gen4",
      "Nguồn (PSU)": "700W 80 Plus Bronze"
    },
    featured: true
  },
  {
    id: "pc-do-hoa-4",
    name: "PC Văn Phòng Basic - i3-12100 / 8GB / SSD 256GB / Intel UHD",
    cat: "pc-do-hoa",
    sub: "",
    brand: "Nguyên Khang PC",
    price: 6190000,
    image: "images/pc-do-hoa-4.jpg",
    tags: ["i3-12100", "UHD 730", "8GB"],
    specs: {
      "Vi xử lý (CPU)": "Intel Core i3-12100 (4 nhân 8 luồng)",
      "Bo mạch chủ": "Mainboard H610M",
      "Bộ nhớ RAM": "8GB DDR4 3200MHz",
      "Đồ họa": "Intel UHD Graphics 730",
      "Ổ cứng": "SSD 256GB NVMe",
      "Nguồn & Case": "PSU 400W + Case Văn phòng"
    },
    featured: true
  },

  // =========================================================================
  // 3. MÀN HÌNH MÁY TÍNH (4 sản phẩm Featured trên Trang chủ)
  // =========================================================================
  {
    id: "man-hinh-1",
    name: "Màn hình LG 24 inch FHD IPS 75Hz viền mỏng",
    cat: "man-hinh",
    sub: "",
    brand: "LG",
    price: 2490000,
    image: "images/man-hinh-1.jpg",
    tags: ["24\"", "FHD IPS", "75Hz"],
    specs: {
      "Kích thước": "24 inch",
      "Độ phân giải": "Full HD (1920 x 1080)",
      "Tấm nền": "IPS chống chói",
      "Tần số quét": "75Hz",
      "Cổng kết nối": "HDMI, D-Sub (VGA)"
    },
    featured: true
  },
  {
    id: "man-hinh-2",
    name: "Màn hình Gaming ASUS TUF 27 inch 2K IPS 165Hz 1ms",
    cat: "man-hinh",
    sub: "",
    brand: "ASUS",
    price: 6290000,
    image: "images/man-hinh-2.jpg",
    tags: ["27\"", "2K IPS", "165Hz"],
    specs: {
      "Kích thước": "27 inch",
      "Độ phân giải": "2K QHD (2560 x 1440)",
      "Tấm nền": "Fast IPS",
      "Tần số quét": "165Hz (1ms)",
      "Cổng kết nối": "2x HDMI 2.0, 1x DisplayPort 1.2"
    },
    featured: true
  },
  {
    id: "man-hinh-3",
    name: "Màn hình Samsung Odyssey G5 27 inch 2K VA 144Hz cong",
    cat: "man-hinh",
    sub: "",
    brand: "Samsung",
    price: 5990000,
    image: "images/man-hinh-3.jpg",
    tags: ["27\" cong", "2K VA", "144Hz"],
    specs: {
      "Kích thước": "27 inch Cong 1000R",
      "Độ phân giải": "2K WQHD (2560 x 1440)",
      "Tấm nền": "VA",
      "Tần số quét": "144Hz (1ms)",
      "Cổng kết nối": "HDMI, DisplayPort"
    },
    featured: true
  },
  {
    id: "man-hinh-4",
    name: "Màn hình Dell 24 inch FHD IPS 100Hz chống chói",
    cat: "man-hinh",
    sub: "",
    brand: "Dell",
    price: 2890000,
    image: "images/man-hinh-4.jpg",
    tags: ["24\"", "FHD IPS", "100Hz"],
    specs: {
      "Kích thước": "23.8 inch",
      "Độ phân giải": "Full HD (1920 x 1080)",
      "Tấm nền": "IPS ComfortView",
      "Tần số quét": "100Hz",
      "Cổng kết nối": "2x HDMI"
    },
    featured: true
  },

  // =========================================================================
  // 4. LAPTOP (Sản phẩm mẫu cho mục Laptop)
  // =========================================================================
  {
    id: "laptop-1",
    name: "Laptop Gaming ASUS TUF Gaming F15 - i5-12500H / RTX 3050 / 16GB / 512GB / 144Hz",
    cat: "laptop",
    sub: "",
    brand: "ASUS",
    price: 16990000,
    image: "images/laptop-1.jpg",
    tags: ["i5-12500H", "RTX 3050", "144Hz"],
    specs: {
      "Vi xử lý": "Intel Core i5-12500H",
      "RAM": "16GB DDR4",
      "Ổ cứng": "512GB SSD NVMe",
      "Card đồ họa": "NVIDIA GeForce RTX 3050 4GB",
      "Màn hình": "15.6 inch FHD IPS 144Hz"
    },
    featured: false
  },
  {
    id: "laptop-2",
    name: "Laptop Dell Inspiron 15 Văn Phòng - i5-1235U / 16GB / SSD 512GB / 15.6\" FHD",
    cat: "laptop",
    sub: "",
    brand: "Dell",
    price: 12490000,
    image: "images/laptop-2.jpg",
    tags: ["i5-1235U", "16GB RAM", "SSD 512GB"],
    specs: {
      "Vi xử lý": "Intel Core i5-1235U",
      "RAM": "16GB DDR4",
      "Ổ cứng": "512GB SSD NVMe",
      "Màn hình": "15.6 inch FHD WVA 120Hz"
    },
    featured: false
  },

  // =========================================================================
  // 5. LINH KIỆN PC -> SUB: CPU (Danh sách Socket 1151v2, 1200, 1700)
  // =========================================================================

  // --- CPU Socket 1151v2 (Intel Gen 8 & Gen 9) ---
  {
    id: "cpu-i3-8100",
    name: "CPU Intel Core i3-8100 (3.6GHz, 4 nhân 4 luồng, 6MB Cache, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 750000,
    image: "images/cpu-i3-8100.jpg",
    tags: ["1151v2", "4 Nhân 4 Luồng", "3.6GHz"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 8",
      "Socket": "FCLGA1151-v2 (Chạy Main H310, B360, Z370, Z390)",
      "Số nhân / Số luồng": "4 Nhân / 4 Luồng",
      "Xung nhịp cơ bản": "3.60 GHz",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "6 MB"
    },
    featured: false
  },
  {
    id: "cpu-i3-9100",
    name: "CPU Intel Core i3-9100 (up to 4.2GHz, 4 nhân 4 luồng, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 950000,
    image: "images/cpu-i3-9100.jpg",
    tags: ["1151v2", "4 Nhân 4 Luồng", "4.2GHz"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 9",
      "Socket": "FCLGA1151-v2 (Chạy Main H310, B360, Z390)",
      "Số nhân / Số luồng": "4 Nhân / 4 Luồng",
      "Xung nhịp tối đa": "4.20 GHz",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "6 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-8500",
    name: "CPU Intel Core i5-8500 (up to 4.1GHz, 6 nhân 6 luồng, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1450000,
    image: "images/cpu-i5-8500.jpg",
    tags: ["1151v2", "6 Nhân 6 Luồng", "4.1GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 8",
      "Socket": "FCLGA1151-v2",
      "Số nhân / Số luồng": "6 Nhân / 6 Luồng",
      "Xung nhịp": "3.00 GHz (Turbo 4.10 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "9 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-9400",
    name: "CPU Intel Core i5-9400 (up to 4.1GHz, 6 nhân 6 luồng, có iGPU, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1650000,
    image: "images/cpu-i5-9400.jpg",
    tags: ["1151v2", "6 Nhân 6 Luồng", "UHD 630"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 9",
      "Socket": "FCLGA1151-v2",
      "Số nhân / Số luồng": "6 Nhân / 6 Luồng",
      "Xung nhịp": "2.90 GHz (Turbo 4.10 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "9 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-8700",
    name: "CPU Intel Core i7-8700 (up to 4.6GHz, 6 nhân 12 luồng, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2590000,
    image: "images/cpu-i7-8700.jpg",
    tags: ["1151v2", "6 Nhân 12 Luồng", "4.6GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 8",
      "Socket": "FCLGA1151-v2",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "3.20 GHz (Turbo 4.60 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-9700",
    name: "CPU Intel Core i7-9700 (up to 4.7GHz, 8 nhân 8 luồng, Socket 1151v2)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 3190000,
    image: "images/cpu-i7-9700.jpg",
    tags: ["1151v2", "8 Nhân 8 Luồng", "4.7GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 9",
      "Socket": "FCLGA1151-v2",
      "Số nhân / Số luồng": "8 Nhân / 8 Luồng",
      "Xung nhịp": "3.00 GHz (Turbo 4.70 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },

  // --- CPU Socket 1200 (Intel Gen 10 & Gen 11) ---
  {
    id: "cpu-i3-10100",
    name: "CPU Intel Core i3-10100 (up to 4.3GHz, 4 nhân 8 luồng, có iGPU, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1490000,
    image: "images/cpu-i3-10100.jpg",
    tags: ["Socket 1200", "4 Nhân 8 Luồng", "UHD 630"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 10",
      "Socket": "LGA1200 (Chạy Main H410, H510, B460, B560)",
      "Số nhân / Số luồng": "4 Nhân / 8 Luồng",
      "Xung nhịp": "3.60 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "6 MB"
    },
    featured: false
  },
  {
    id: "cpu-i3-10100f",
    name: "CPU Intel Core i3-10100F (up to 4.3GHz, 4 nhân 8 luồng, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1190000,
    image: "images/cpu-i3-10100f.jpg",
    tags: ["Socket 1200", "4 Nhân 8 Luồng", "4.3GHz"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 10 (Cần VGA rời)",
      "Socket": "LGA1200 (Chạy Main H410, H510, B460, B560)",
      "Số nhân / Số luồng": "4 Nhân / 8 Luồng",
      "Xung nhịp": "3.60 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "6 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-10400f",
    name: "CPU Intel Core i5-10400F (up to 4.3GHz, 6 nhân 12 luồng, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1950000,
    image: "images/cpu-i5-10400f.jpg",
    tags: ["Socket 1200", "6 Nhân 12 Luồng", "4.3GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 10",
      "Socket": "LGA1200",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.90 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-10400",
    name: "CPU Intel Core i5-10400 (up to 4.3GHz, 6 nhân 12 luồng, có iGPU, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2350000,
    image: "images/cpu-i5-10400.jpg",
    tags: ["Socket 1200", "6 Nhân 12 Luồng", "UHD 630"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 10",
      "Socket": "LGA1200",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.90 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-11400f",
    name: "CPU Intel Core i5-11400F (up to 4.4GHz, 6 nhân 12 luồng, PCIe 4.0, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2290000,
    image: "images/cpu-i5-11400f.jpg",
    tags: ["Socket 1200", "6 Nhân 12 Luồng", "4.4GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 11",
      "Socket": "LGA1200 (Chạy Main H510, B560)",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.60 GHz (Turbo 4.40 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-11400",
    name: "CPU Intel Core i5-11400 (up to 4.4GHz, 6 nhân 12 luồng, UHD 730, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2650000,
    image: "images/cpu-i5-11400.jpg",
    tags: ["Socket 1200", "6 Nhân 12 Luồng", "UHD 730"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 11",
      "Socket": "LGA1200",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.60 GHz (Turbo 4.40 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 730",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-10700",
    name: "CPU Intel Core i7-10700 (up to 4.8GHz, 8 nhân 16 luồng, có iGPU, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 3990000,
    image: "images/cpu-i7-10700.jpg",
    tags: ["Socket 1200", "8 Nhân 16 Luồng", "4.8GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 10",
      "Socket": "LGA1200",
      "Số nhân / Số luồng": "8 Nhân / 16 Luồng",
      "Xung nhịp": "2.90 GHz (Turbo 4.80 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 630",
      "Bộ nhớ đệm": "16 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-10700f",
    name: "CPU Intel Core i7-10700F (up to 4.8GHz, 8 nhân 16 luồng, Socket 1200)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 3690000,
    image: "images/cpu-i7-10700f.jpg",
    tags: ["Socket 1200", "8 Nhân 16 Luồng", "4.8GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 10",
      "Socket": "LGA1200",
      "Số nhân / Số luồng": "8 Nhân / 16 Luồng",
      "Xung nhịp": "2.90 GHz (Turbo 4.80 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "16 MB"
    },
    featured: false
  },

  // --- CPU Socket 1700 (Intel Gen 12, 13, 14) ---
  {
    id: "cpu-i3-12100f",
    name: "CPU Intel Core i3-12100F (up to 4.3GHz, 4 nhân 8 luồng, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 1790000,
    image: "images/cpu-i3-12100f.jpg",
    tags: ["LGA1700", "4 Nhân 8 Luồng", "4.3GHz"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 12",
      "Socket": "LGA1700 (Chạy Main H610, B660, B760)",
      "Số nhân / Số luồng": "4 Nhân / 8 Luồng",
      "Xung nhịp": "3.30 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i3-12100",
    name: "CPU Intel Core i3-12100 (up to 4.3GHz, 4 nhân 8 luồng, UHD 730, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2390000,
    image: "images/cpu-i3-12100.jpg",
    tags: ["LGA1700", "4 Nhân 8 Luồng", "UHD 730"],
    specs: {
      "Dòng CPU": "Intel Core i3 Thế hệ 12",
      "Socket": "LGA1700",
      "Số nhân / Số luồng": "4 Nhân / 8 Luồng",
      "Xung nhịp": "3.30 GHz (Turbo 4.30 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 730",
      "Bộ nhớ đệm": "12 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-12400f",
    name: "CPU Intel Core i5-12400F (up to 4.4GHz, 6 nhân 12 luồng, 18MB Cache, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 2690000,
    image: "images/cpu-i5-12400f.jpg",
    tags: ["LGA1700", "6 Nhân 12 Luồng", "4.4GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 12",
      "Socket": "LGA1700 (H610, B660, B760)",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.50 GHz (Turbo 4.40 GHz)",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "18 MB"
    },
    featured: true // Featured Linh kiện 1
  },
  {
    id: "cpu-i5-12400",
    name: "CPU Intel Core i5-12400 (up to 4.4GHz, 6 nhân 12 luồng, UHD 730, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 3390000,
    image: "images/cpu-i5-12400.jpg",
    tags: ["LGA1700", "6 Nhân 12 Luồng", "UHD 730"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 12",
      "Socket": "LGA1700",
      "Số nhân / Số luồng": "6 Nhân / 12 Luồng",
      "Xung nhịp": "2.50 GHz (Turbo 4.40 GHz)",
      "Đồ họa tích hợp": "Intel UHD Graphics 730",
      "Bộ nhớ đệm": "18 MB"
    },
    featured: false
  },
  {
    id: "linh-kien-1",
    name: "CPU Intel Core i5-13400F (up to 4.6GHz, 10 nhân 16 luồng, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 4190000,
    image: "images/cpu-i5-13400f.jpg",
    tags: ["10 nhân", "LGA1700", "4.6GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 13",
      "Socket": "LGA1700 (Chạy Main H610, B660, B760)",
      "Số nhân / Số luồng": "10 Nhân (6P + 4E) / 16 Luồng",
      "Xung nhịp tối đa": "4.60 GHz",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "20 MB"
    },
    featured: true // Featured Linh kiện 2
  },
  {
    id: "cpu-i5-13500",
    name: "CPU Intel Core i5-13500 (up to 4.8GHz, 14 nhân 20 luồng, UHD 770, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 5390000,
    image: "images/cpu-i5-13500.jpg",
    tags: ["LGA1700", "14 Nhân 20 Luồng", "4.8GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 13",
      "Socket": "LGA1700",
      "Số nhân / Số luồng": "14 Nhân (6P + 8E) / 20 Luồng",
      "Xung nhịp tối đa": "4.80 GHz",
      "Đồ họa tích hợp": "Intel UHD Graphics 770",
      "Bộ nhớ đệm": "24 MB"
    },
    featured: false
  },
  {
    id: "cpu-i5-14400f",
    name: "CPU Intel Core i5-14400F (up to 4.7GHz, 10 nhân 16 luồng, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 4490000,
    image: "images/cpu-i5-14400f.jpg",
    tags: ["LGA1700", "10 Nhân 16 Luồng", "4.7GHz"],
    specs: {
      "Dòng CPU": "Intel Core i5 Thế hệ 14",
      "Socket": "LGA1700 (B660, B760)",
      "Số nhân / Số luồng": "10 Nhân (6P + 4E) / 16 Luồng",
      "Xung nhịp tối đa": "4.70 GHz",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "20 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-12700",
    name: "CPU Intel Core i7-12700 (up to 4.9GHz, 12 nhân 20 luồng, UHD 770, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 6290000,
    image: "images/cpu-i7-12700.jpg",
    tags: ["LGA1700", "12 Nhân 20 Luồng", "4.9GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 12",
      "Socket": "LGA1700",
      "Số nhân / Số luồng": "12 Nhân (8P + 4E) / 20 Luồng",
      "Xung nhịp tối đa": "4.90 GHz",
      "Đồ họa tích hợp": "Intel UHD Graphics 770",
      "Bộ nhớ đệm": "25 MB"
    },
    featured: false
  },
  {
    id: "cpu-i7-12700f",
    name: "CPU Intel Core i7-12700F (up to 4.9GHz, 12 nhân 20 luồng, Socket 1700)",
    cat: "linh-kien",
    sub: "cpu",
    brand: "Intel",
    price: 5790000,
    image: "images/cpu-i7-12700f.jpg",
    tags: ["LGA1700", "12 Nhân 20 Luồng", "4.9GHz"],
    specs: {
      "Dòng CPU": "Intel Core i7 Thế hệ 12",
      "Socket": "LGA1700",
      "Số nhân / Số luồng": "12 Nhân (8P + 4E) / 20 Luồng",
      "Xung nhịp tối đa": "4.90 GHz",
      "Đồ họa tích hợp": "Không (Yêu cầu Card màn hình rời)",
      "Bộ nhớ đệm": "25 MB"
    },
    featured: false
  },

  // =========================================================================
  // 6. LINH KIỆN PC -> SUB: MAINBOARD (ASUS, GIGABYTE, MSI | Giá 1.000k - 3.500k)
  // =========================================================================

  // --- Mainboard Socket 1151v2 (H310M, B360M) ---
  {
    id: "main-asus-h310m",
    name: "Mainboard ASUS PRIME H310M-E R2.0 (Socket 1151v2, DDR4, m-ATX)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 1050000,
    image: "images/main-asus-h310m.jpg",
    tags: ["1151v2", "H310M", "DDR4"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel H310",
      "Socket": "LGA 1151v2 (Hỗ trợ CPU Intel Gen 8 & Gen 9)",
      "Khe RAM": "2 khe DDR4 up to 2666MHz",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-gigabyte-h310m",
    name: "Mainboard GIGABYTE H310M DS2 / H310M H 2.0 (Socket 1151v2, DDR4)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 1050000,
    image: "images/main-gigabyte-h310m.jpg",
    tags: ["1151v2", "H310M", "DDR4"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel H310",
      "Socket": "LGA 1151v2 (Intel Gen 8 / Gen 9)",
      "Khe RAM": "2 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-msi-h310m",
    name: "Mainboard MSI H310M PRO-VDH PLUS (Socket 1151v2, DDR4, m-ATX)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 1000000,
    image: "images/main-msi-h310m.jpg",
    tags: ["1151v2", "H310M", "DDR4"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel H310",
      "Socket": "LGA 1151v2 (Intel Gen 8 / Gen 9)",
      "Khe RAM": "2 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-asus-b360m",
    name: "Mainboard ASUS TUF B360M-PLUS GAMING / PRIME B360M (Socket 1151v2, 4 khe RAM)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 1390000,
    image: "images/main-asus-b360m.jpg",
    tags: ["1151v2", "B360M", "DDR4"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel B360",
      "Socket": "LGA 1151v2 (Intel Gen 8 / Gen 9)",
      "Khe RAM": "4 khe DDR4, hỗ trợ M.2 NVMe",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-gigabyte-b360m",
    name: "Mainboard GIGABYTE B360M AORUS PRO / D3H (Socket 1151v2, DDR4, M.2 NVMe)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 1390000,
    image: "images/main-gigabyte-b360m.jpg",
    tags: ["1151v2", "B360M", "DDR4"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel B360",
      "Socket": "LGA 1151v2 (Intel Gen 8 / Gen 9)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-msi-b360m",
    name: "Mainboard MSI B360M MORTAR / B360M BAZOOKA (Socket 1151v2, DDR4)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 1350000,
    image: "images/main-msi-b360m.jpg",
    tags: ["1151v2", "B360M", "DDR4"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel B360",
      "Socket": "LGA 1151v2 (Intel Gen 8 / Gen 9)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },

  // --- Mainboard Socket 1200 (H410M, H510M, B460M, B560M) ---
  {
    id: "main-asus-h410m",
    name: "Mainboard ASUS PRIME H410M-E (Socket 1200, DDR4, M.2, m-ATX)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 1290000,
    image: "images/main-asus-h410m.jpg",
    tags: ["Socket 1200", "H410M", "DDR4"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel H410",
      "Socket": "LGA 1200 (Intel Gen 10)",
      "Khe RAM": "2 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-gigabyte-h410m",
    name: "Mainboard GIGABYTE H410M H V2 / DS2V (Socket 1200, DDR4)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 1250000,
    image: "images/main-gigabyte-h410m.jpg",
    tags: ["Socket 1200", "H410M", "DDR4"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel H410",
      "Socket": "LGA 1200 (Intel Gen 10)",
      "Khe RAM": "2 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-msi-h510m",
    name: "Mainboard MSI PRO H510M-B / H510M-A PRO (Socket 1200, Gen 10 & 11)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 1490000,
    image: "images/main-msi-h510m.jpg",
    tags: ["Socket 1200", "H510M", "DDR4"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel H510",
      "Socket": "LGA 1200 (Hỗ trợ CPU Intel Gen 10 & Gen 11)",
      "Khe RAM": "2 khe DDR4 up to 3200MHz",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-asus-h510m",
    name: "Mainboard ASUS PRIME H510M-K / H510M-E (Socket 1200, Gen 10 & 11)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 1550000,
    image: "images/main-asus-h510m.jpg",
    tags: ["Socket 1200", "H510M", "DDR4"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel H510",
      "Socket": "LGA 1200 (Intel Gen 10 & Gen 11)",
      "Khe RAM": "2 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-gigabyte-b460m",
    name: "Mainboard GIGABYTE B460M DS3H / AORUS PRO (Socket 1200, 4 khe RAM)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 1690000,
    image: "images/main-gigabyte-b460m.jpg",
    tags: ["Socket 1200", "B460M", "4 Khe RAM"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel B460",
      "Socket": "LGA 1200 (Intel Gen 10)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-msi-b560m",
    name: "Mainboard MSI B560M PRO-VDH / MAG B560M MORTAR (Socket 1200, DDR4)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 1990000,
    image: "images/main-msi-b560m.jpg",
    tags: ["Socket 1200", "B560M", "Bus 3200+"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel B560",
      "Socket": "LGA 1200 (Intel Gen 10 & Gen 11)",
      "Khe RAM": "4 khe DDR4 hỗ trợ XMP 3200MHz+",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-asus-b560m",
    name: "Mainboard ASUS TUF GAMING B560M-PLUS / PRIME B560M-A (Socket 1200)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 2090000,
    image: "images/main-asus-b560m.jpg",
    tags: ["Socket 1200", "B560M", "4 Khe RAM"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel B560",
      "Socket": "LGA 1200 (Intel Gen 10 & Gen 11)",
      "Khe RAM": "4 khe DDR4, 2 khe M.2 NVMe",
      "Kích thước": "m-ATX"
    },
    featured: false
  },

  // --- Mainboard Socket 1700 (H610M, B660M, B760M) ---
  {
    id: "main-asus-h610m",
    name: "Mainboard ASUS PRIME H610M-K D4 (Socket 1700, DDR4, Gen 12/13/14)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 1890000,
    image: "images/main-asus-h610m.jpg",
    tags: ["LGA1700", "H610M", "DDR4"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel H610",
      "Socket": "LGA 1700 (Hỗ trợ CPU Intel Gen 12, 13, 14)",
      "Khe RAM": "2 khe DDR4 3200MHz",
      "Khe ổ cứng": "1x M.2 PCIe 3.0, 4x SATA 6Gb/s"
    },
    featured: false
  },
  {
    id: "main-gigabyte-h610m",
    name: "Mainboard GIGABYTE H610M H V2 DDR4 (Socket 1700, Gen 12/13/14)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 1850000,
    image: "images/main-gigabyte-h610m.jpg",
    tags: ["LGA1700", "H610M", "DDR4"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel H610",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "2 khe DDR4 3200MHz",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-msi-h610m",
    name: "Mainboard MSI PRO H610M-E DDR4 (Socket 1700, Gen 12/13/14)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 1790000,
    image: "images/main-msi-h610m.jpg",
    tags: ["LGA1700", "H610M", "DDR4"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel H610",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "2 khe DDR4 3200MHz",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-asus-b660m",
    name: "Mainboard ASUS PRIME B660M-K D4 / TUF B660M-PLUS (Socket 1700, DDR4)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 2490000,
    image: "images/main-asus-b660m.jpg",
    tags: ["LGA1700", "B660M", "PCIe 4.0"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel B660",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "DDR4 3200MHz+",
      "Khe M.2": "2 khe M.2 NVMe PCIe 4.0"
    },
    featured: false
  },
  {
    id: "main-gigabyte-b660m",
    name: "Mainboard GIGABYTE B660M DS3H DDR4 (Socket 1700, 4 khe RAM, Tản VRM)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 2450000,
    image: "images/main-gigabyte-b660m.jpg",
    tags: ["LGA1700", "B660M", "4 Khe RAM"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel B660",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "4 khe DDR4",
      "Khe M.2": "2 khe M.2 PCIe 4.0"
    },
    featured: false
  },
  {
    id: "main-msi-b760m",
    name: "Mainboard MSI PRO B760M-A WIFI DDR4 / B760M-P (Socket 1700, Gen 12/13/14)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "MSI",
    price: 2890000,
    image: "images/main-msi-b760m.jpg",
    tags: ["LGA1700", "B760M", "Gen 12-14"],
    specs: {
      "Hãng sản xuất": "MSI",
      "Chipset": "Intel B760",
      "Socket": "LGA 1700 (Tối ưu cho i5-13400F, i5-14400F, i7-12700F)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: true // Featured Linh kiện 3
  },
  {
    id: "main-gigabyte-b760m",
    name: "Mainboard GIGABYTE B760M GAMING PLUS WIFI DDR4 / DS3H (Socket 1700)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "GIGABYTE",
    price: 3190000,
    image: "images/main-gigabyte-b760m.jpg",
    tags: ["LGA1700", "B760M", "Tản VRM"],
    specs: {
      "Hãng sản xuất": "GIGABYTE",
      "Chipset": "Intel B760",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },
  {
    id: "main-asus-b760m",
    name: "Mainboard ASUS TUF GAMING B760M-E D4 / PRIME B760M-A (Socket 1700)",
    cat: "linh-kien",
    sub: "mainboard",
    brand: "ASUS",
    price: 3450000,
    image: "images/main-asus-b760m.jpg",
    tags: ["LGA1700", "B760M", "TUF Gaming"],
    specs: {
      "Hãng sản xuất": "ASUS",
      "Chipset": "Intel B760",
      "Socket": "LGA 1700 (Gen 12, 13, 14)",
      "Khe RAM": "4 khe DDR4",
      "Kích thước": "m-ATX"
    },
    featured: false
  },

  // =========================================================================
  // 7. LINH KIỆN PC -> SUB: VGA (Danh sách 12 dòng Card màn hình)
  // =========================================================================
  {
    id: "vga-gtx-1050ti-4gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1050Ti 4GB GDDR5 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 1650000,
    image: "images/vga-gtx-1050ti.jpg",
    tags: ["GTX 1050Ti", "4GB GDDR5", "2 Fan"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1050 Ti",
      "Dung lượng VRAM": "4GB GDDR5 (128-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI (Tùy đợt hàng)",
      "Nguồn đề xuất": "Từ 350W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1060-3gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1060 3GB GDDR5 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 1850000,
    image: "images/vga-gtx-1060-3gb.jpg",
    tags: ["GTX 1060", "3GB GDDR5", "192-bit"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1060",
      "Dung lượng VRAM": "3GB GDDR5 (192-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI / Colorful",
      "Nguồn đề xuất": "Từ 450W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1060-6gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1060 6GB GDDR5 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 2290000,
    image: "images/vga-gtx-1060-6gb.jpg",
    tags: ["GTX 1060", "6GB GDDR5", "192-bit"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1060",
      "Dung lượng VRAM": "6GB GDDR5 (192-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 450W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1650-4gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1650 4GB GDDR6",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 2490000,
    image: "images/vga-gtx-1650.jpg",
    tags: ["GTX 1650", "4GB GDDR6", "Tiết kiệm điện"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1650",
      "Dung lượng VRAM": "4GB GDDR6 (128-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 400W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1650s-4gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1650 Super 4GB GDDR6 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 2790000,
    image: "images/vga-gtx-1650s.jpg",
    tags: ["GTX 1650 Super", "4GB GDDR6", "2 Fan"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1650 Super",
      "Dung lượng VRAM": "4GB GDDR6 (128-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 450W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1660-6gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1660 6GB GDDR5 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 3090000,
    image: "images/vga-gtx-1660.jpg",
    tags: ["GTX 1660", "6GB VRAM", "192-bit"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1660",
      "Dung lượng VRAM": "6GB GDDR5 (192-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 450W trở lên"
    },
    featured: false
  },
  {
    id: "vga-gtx-1660s-6gb",
    name: "Card màn hình VGA NVIDIA GeForce GTX 1660 Super 6GB GDDR6 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 3490000,
    image: "images/vga-gtx-1660s.jpg",
    tags: ["GTX 1660 Super", "6GB GDDR6", "Best P/P"],
    specs: {
      "GPU": "NVIDIA GeForce GTX 1660 Super",
      "Dung lượng VRAM": "6GB GDDR6 (192-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 500W trở lên"
    },
    featured: false
  },
  {
    id: "vga-rtx-2060-6gb",
    name: "Card màn hình VGA NVIDIA GeForce RTX 2060 6GB GDDR6 (Hỗ trợ Ray Tracing & DLSS)",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 4190000,
    image: "images/vga-rtx-2060.jpg",
    tags: ["RTX 2060", "6GB GDDR6", "DLSS"],
    specs: {
      "GPU": "NVIDIA GeForce RTX 2060",
      "Dung lượng VRAM": "6GB GDDR6 (192-bit)",
      "Công nghệ": "Ray Tracing, NVIDIA DLSS",
      "Nguồn đề xuất": "Từ 550W trở lên"
    },
    featured: false
  },
  {
    id: "vga-rtx-2060s-8gb",
    name: "Card màn hình VGA NVIDIA GeForce RTX 2060 Super 8GB GDDR6 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 4790000,
    image: "images/vga-rtx-2060s.jpg",
    tags: ["RTX 2060 Super", "8GB GDDR6", "256-bit"],
    specs: {
      "GPU": "NVIDIA GeForce RTX 2060 Super",
      "Dung lượng VRAM": "8GB GDDR6 (256-bit)",
      "Công nghệ": "Ray Tracing, NVIDIA DLSS",
      "Nguồn đề xuất": "Từ 550W trở lên"
    },
    featured: false
  },
  {
    id: "vga-rtx-3050-6gb",
    name: "Card màn hình VGA NVIDIA GeForce RTX 3050 6GB GDDR6 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 4690000,
    image: "images/vga-rtx-3050.jpg",
    tags: ["RTX 3050", "6GB GDDR6", "Không nguồn phụ"],
    specs: {
      "GPU": "NVIDIA GeForce RTX 3050",
      "Dung lượng VRAM": "6GB GDDR6",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 450W trở lên"
    },
    featured: false
  },
  {
    id: "linh-kien-2",
    name: "Card màn hình VGA NVIDIA GeForce RTX 3060 12GB GDDR6 2 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 5990000,
    image: "images/vga-rtx-3060-12gb.jpg",
    tags: ["RTX 3060", "12GB GDDR6", "DLSS"],
    specs: {
      "GPU": "NVIDIA GeForce RTX 3060",
      "Dung lượng VRAM": "12GB GDDR6 (192-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI / Colorful",
      "Nguồn đề xuất": "Từ 600W trở lên"
    },
    featured: true // Featured Linh kiện 4
  },
  {
    id: "vga-rtx-3060ti-8gb",
    name: "Card màn hình VGA NVIDIA GeForce RTX 3060Ti 8GB GDDR6 2/3 Fan",
    cat: "linh-kien",
    sub: "vga",
    brand: "NVIDIA",
    price: 6590000,
    image: "images/vga-rtx-3060ti.jpg",
    tags: ["RTX 3060Ti", "8GB GDDR6", "256-bit"],
    specs: {
      "GPU": "NVIDIA GeForce RTX 3060 Ti",
      "Dung lượng VRAM": "8GB GDDR6 (256-bit)",
      "Hãng tùy chọn": "ASUS / GIGABYTE / MSI",
      "Nguồn đề xuất": "Từ 650W trở lên"
    },
    featured: false
  },

  // =========================================================================
  // 8. LINH KIỆN PC -> SUB: RAM, STORAGE, NGUỒN/CASE/TẢN (Để đủ các sub-menu)
  // =========================================================================
  {
    id: "linh-kien-3",
    name: "RAM Kingston Fury Beast 16GB (2x8GB) DDR4 3200MHz Tản nhiệt thép",
    cat: "linh-kien",
    sub: "ram",
    brand: "Kingston",
    price: 1090000,
    image: "images/ram-kingston-16gb.jpg",
    tags: ["16GB", "DDR4", "3200MHz"],
    specs: {
      "Hãng sản xuất": "Kingston",
      "Dung lượng": "16GB (2x8GB hoặc 1x16GB)",
      "Chuẩn RAM": "DDR4 Bus 3200MHz",
      "Tản nhiệt": "Có tản nhiệt kim loại"
    },
    featured: false
  },
  {
    id: "linh-kien-4",
    name: "Ổ cứng SSD Samsung 980 500GB M.2 NVMe PCIe 3.0",
    cat: "linh-kien",
    sub: "storage",
    brand: "Samsung",
    price: 1190000,
    image: "images/ssd-samsung-980.jpg",
    tags: ["500GB", "NVMe", "3.100MB/s"],
    specs: {
      "Hãng sản xuất": "Samsung",
      "Dung lượng": "500GB",
      "Chuẩn giao tiếp": "M.2 NVMe PCIe Gen3 x4",
      "Tốc độ đọc / ghi": "Up to 3.100 MB/s / 2.600 MB/s"
    },
    featured: false
  },
  {
    id: "psu-650w-80plus",
    name: "Nguồn máy tính PSU 650W 80 Plus Bronze Công suất thực (Dây bọc lưới)",
    cat: "linh-kien",
    sub: "nguon-case-tan",
    brand: "Cooler Master",
    price: 1150000,
    image: "images/psu-650w.jpg",
    tags: ["650W", "80 Plus", "Fan 12cm"],
    specs: {
      "Công suất thực": "650W",
      "Chứng nhận": "80 Plus Bronze",
      "Đầu cấp nguồn VGA": "2x 8-pin (6+2) PCIe",
      "Quạt làm mát": "120mm êm ái"
    },
    featured: false
  }
];