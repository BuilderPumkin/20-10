/**
 * ========================================================
 * CẤU HÌNH DÀNH RIÊNG CHO NGƯỜI 1 (THƯ MỤC 1)
 * ========================================================
 * Bạn có thể tự do thay đổi ảnh và lời nhắn bên dưới.
 * Mọi thay đổi ở đây chỉ ảnh hưởng đến website của Người 1,
 * hoàn toàn không ảnh hưởng đến Người 2, Người 3 hay mã nguồn gốc.
 */

window.CUSTOM_CONFIG = {
  // 1. Ảnh ghép hình trái tim (Cảnh 2)
  // Đặt ảnh của bạn vào thư mục images/ (ví dụ: heart.jpg) rồi điền đường dẫn './images/heart.jpg'
  // Nếu để trống '', website sẽ tự hiển thị hình vẽ trái tim nghệ thuật mặc định.
  puzzleHeartImage: './images/heart.png',

  // 2. Danh sách ảnh kỷ niệm quay quanh hố đen (Cảnh 3) và khối cầu 3D (Cảnh 4)
  // Đặt các file ảnh của bạn vào thư mục images/ rồi khai báo ở đây (có thể thêm bớt tùy ý):
  thumbnails: [
    './images/photo1.jpg',
    './images/photo2.jpg',
    './images/photo3.png',
    './images/photo4.png',
    './images/photo5.png',
    './images/photo6.png',
    './images/photo7.jpg',
    './images/photo8.jpg',
    './images/photo9.jpg',
    './images/photo10.png',
    './images/photo11.png',
    './images/photo12.png',
    './images/photo13.png',
    './images/photo14.jpg',
    './images/photo15.jpg',
    './images/photo16.png',
    './images/photo17.jpg',
    './images/photo18.png',
    './images/photo19.png',
  ],

  // 3. Nội dung bức thư ở Cảnh 5
  letter: {
    title: 'Gửi nhi cutee !',
    bodyText: 'Chúc em một ngày 20/10 thật nhiều niềm vui, luôn rạng rỡ và hạnh phúc như những vì sao trên dải ngân hà. Cảm ơn em vì đã đến và thắp sáng những khoảnh khắc dịu dàng nhất trong cuộc đời anh. Hãy luôn mỉm cười và đón nhận những điều ngọt ngào nhất nhé!',
    signature: 'pumkin'
  },

  // 4. Tiêu đề thiệp lịch (Cảnh 2)
  calendar: {
    headerText: 'Anh ❤ Em'
  },

  // 5. Dòng chữ phát sáng nghiêng 45 độ xoay quanh quả cầu ảnh 3D (Cảnh 4)
  sphereText: '✦  CHÚC MỪNG 20/10  ✦  HẠNH PHÚC & RẠNG RỠ  ✦  YÊU THƯƠNG ĐONG ĐẦY  ✦  XINH ĐẸP BÌNH YÊN  ',

  // 6. Nhạc nền (Tùy chọn: đặt file mp3 vào thư mục này rồi điền './music.mp3')
  bgmUrl: ''
};
