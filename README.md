# BỘ WEBSITE THIỆP TƯƠNG TÁC 20/10 (3 BẢN ĐỘC LẬP)

Thư mục `20-10/` chứa trọn bộ mã nguồn hoàn chỉnh đã được đóng gói sẵn sàng để **upload trực tiếp lên GitHub Pages** mà không cần cài đặt thêm Node.js hay chạy lệnh build nào.

---

## 📁 CẤU TRÚC THƯ MỤC

```text
20-10/
├── index.html            <- Trang chủ điều hướng: Cho phép chọn mở Thiệp 1, 2 hoặc 3
├── README.md             <- Hướng dẫn này
│
├── 1/                    <- WEBSITE THIỆP 1 (Dành cho Người 1)
│   ├── index.html        <- Website độc lập hoàn chỉnh
│   ├── config.js         <- File cấu hình ảnh & lời chúc riêng của Người 1
│   ├── rose_sketch.png   <- Dữ liệu hoa hồng hạt
│   └── images/           <- Thư mục chứa ảnh riêng của Người 1
│
├── 2/                    <- WEBSITE THIỆP 2 (Dành cho Người 2)
│   ├── index.html
│   ├── config.js
│   ├── rose_sketch.png
│   └── images/
│
└── 3/                    <- WEBSITE THIỆP 3 (Dành cho Người 3)
    ├── index.html
    ├── config.js
    ├── rose_sketch.png
    └── images/
```

---

## 🚀 CÁCH UPLOAD LÊN GITHUB & BẬT GITHUB PAGES

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com/) và bấm nút **New** (hoặc truy cập `https://github.com/new`).
2. Đặt tên Repository (ví dụ: `thiep-20-10`).
3. Chọn chế độ **Public** và bấm **Create repository**.

### Bước 2: Upload các file
Bạn có thể upload toàn bộ các file bên trong thư mục `20-10/` lên repository vừa tạo:
* Kéo thả toàn bộ các file và thư mục (`index.html`, `1/`, `2/`, `3/`) lên GitHub trên trình duyệt, hoặc dùng lệnh Git:
  ```bash
  git init
  git add .
  git commit -m "Thiệp 20-10"
  git branch -M main
  git remote add origin https://github.com/<tên_tài_khoản>/<tên_repo>.git
  git push -u origin main
  ```

### Bước 3: Kích hoạt GitHub Pages
1. Trong repository trên GitHub, vào tab **Settings** (Cài đặt).
2. Ở thanh bên trái, chọn mục **Pages**.
3. Tại phần **Branch**, chọn nhánh **main** (hoặc `master`), thư mục chọn **/ (root)** rồi bấm **Save**.
4. Chờ khoảng 1 - 2 phút, GitHub sẽ cung cấp đường link website trực tiếp của bạn:
   * **Trang chủ chọn thiệp:** `https://<tên_tài_khoản>.github.io/<tên_repo>/`
   * **Link gửi trực tiếp cho Người 1:** `https://<tên_tài_khoản>.github.io/<tên_repo>/1/`
   * **Link gửi trực tiếp cho Người 2:** `https://<tên_tài_khoản>.github.io/<tên_repo>/2/`
   * **Link gửi trực tiếp cho Người 3:** `https://<tên_tài_khoản>.github.io/<tên_repo>/3/`

---

## 🎨 CÁCH THAY ĐỔI ẢNH VÀ LỜI CHÚC CHO TỪNG NGƯỜI

Mỗi thư mục `1`, `2`, `3` hoàn toàn độc lập với nhau. Bạn sửa ở thư mục nào thì chỉ thư mục đó thay đổi, không ảnh hưởng đến các thư mục khác hay nền tảng gốc.

### 1. Thay đổi ảnh:
Vào thư mục `images/` của người bạn muốn đổi (ví dụ: `20-10/1/images/`):
* **Ảnh ghép trái tim (Cảnh 2):** Chép ảnh của bạn vào đây và đặt tên là `heart.jpg`.
* **Ảnh kỷ niệm quay quanh hố đen và khối cầu 3D (Cảnh 3 & 4):** Chép các ảnh của bạn vào và đặt tên là:
  `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`, `photo7.jpg`, `photo8.jpg`.
* *(Mẹo: Nếu bạn chưa có ảnh thật, website sẽ tự động vẽ hình minh họa nghệ thuật mà không bị lỗi).*

### 2. Thay đổi bức thư và tiêu đề:
Mở file `config.js` trong từng thư mục bằng bất kỳ trình soạn thảo nào (Notepad, VS Code...):
* `letter.title`: Tiêu đề bức thư (ví dụ: `'Gửi Linh !'`, `'Gửi Mẹ yêu !'`).
* `letter.bodyText`: Lời nhắn nhủ, tâm sự gõ typewriter.
* `letter.signature`: Tên người gửi ở góc phải dưới bức thư (ví dụ: `'pumkin'`, `'Con của Mẹ'`).
* `calendar.headerText`: Dòng chữ to trên đầu thiệp lịch (ví dụ: `'Anh ❤ Em'`, `'Kính Tặng Mẹ'`).
* `bgmUrl`: Đường dẫn file nhạc nền mp3 (ví dụ: `'./music.mp3'`).
