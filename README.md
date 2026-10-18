# 🖥️ Nguyên Khang PC - High-End Gaming & Workstation

Website thương mại điện tử chuyên cung cấp PC Gaming, PC Đồ họa, Laptop, Màn hình và Linh kiện máy tính chính hãng. 
- **Địa chỉ cửa hàng:** 458/70 Đường 3 Tháng 2, Phường Hòa Hưng (Quận 10), TP. Hồ Chí Minh.
- **Hotline / Zalo:** 0708.715.678 (Mr. Kha)

---

## 🚀 1. Tổng quan công nghệ (Tech Stack)
Dự án được xây dựng theo mô hình **JAMstack tối ưu hiệu năng**, không phụ thuộc cơ sở dữ liệu cồng kềnh, tối ưu hóa tốc độ tải trang dưới 1 giây:
- **Frontend:** HTML5 thuần, Tailwind CSS (Build qua Tailwind CLI v3), FontAwesome 6 Icons, Google Fonts (Inter).
- **Logic & State Management:** Vanilla JavaScript (ES6+), quản lý giỏ hàng qua `localStorage`.
- **Hệ thống Quản trị (Admin CMS):** Tích hợp tự động đồng bộ sản phẩm từ **Google Sheets (qua định dạng CSV)** giúp chủ shop dễ dàng cập nhật giá và thêm sản phẩm mới mà không cần sửa code.
- **Hạ tầng & Triển khai (Deployment):** Quản lý mã nguồn qua **GitHub**, vận hành trực tiếp trên **Cloudflare Pages** (Chi phí duy trì server: **0 VNĐ / trọn đời**).

---

## 📂 2. Cấu trúc thư mục dự án (Project Structure)

```text
nguyenkhangpc/
├── css/
│   ├── input.css         <-- File nguồn Tailwind CSS
│   └── style.css         <-- File CSS hoàn chỉnh sau khi build
├── images/               <-- Thư mục chứa hình ảnh sản phẩm & banner
├── js/
│   ├── data.js           <-- Kho dữ liệu sản phẩm gốc & hàm đồng bộ Google Sheets
│   └── main.js           <-- Xử lý toàn bộ logic: Render, Giỏ hàng, Tìm kiếm chuẩn hóa, Bộ lọc
├── cart.html             <-- Trang giỏ hàng (Tăng/giảm số lượng, tính tổng tiền)
├── category.html         <-- Trang danh mục & Bộ lọc thông minh (Hãng, Mức giá, Sắp xếp)
├── product.html          <-- Trang chi tiết sản phẩm & Bảng thông số kỹ thuật
├── checkout.html         <-- Trang xác nhận thông tin đặt hàng
├── index.html            <-- Trang chủ (Hero banner, 4 khối sản phẩm nổi bật)
├── tailwind.config.js    <-- Cấu hình màu sắc thương hiệu (Primary, Accent)
└── README.md             <-- Tài liệu hướng dẫn dự án