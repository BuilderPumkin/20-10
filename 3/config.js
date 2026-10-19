/**
 * ========================================================
 * CẤU HÌNH DÀNH RIÊNG CHO NGƯỜI 3 (THƯ MỤC 3)
 * ========================================================
 * Bạn có thể tự do thay đổi ảnh và lời nhắn bên dưới.
 * Mọi thay đổi ở đây chỉ ảnh hưởng đến website của Người 3,
 * hoàn toàn không ảnh hưởng đến Người 1, Người 2 hay mã nguồn gốc.
 */

window.CUSTOM_CONFIG = {
  // 1. Ảnh ghép hình trái tim (Cảnh 2)
  puzzleHeartImage: './images/puzzle_heart.png',

  // 2. Danh sách ảnh kỷ niệm quay quanh hố đen (Cảnh 3) và khối cầu 3D (Cảnh 4)
  thumbnails: [
    './images/photo1.png',
    './images/photo2.png',
    './images/photo3.png',
    './images/photo4.png',
    './images/photo5.png',
  ],

  // 3. Nội dung bức thư ở Cảnh 5
  letter: {
    title: 'Gửi Mẹ yêu !',
    bodyText: 'Nhân ngày Phụ nữ Việt Nam 20/10, con chúc Mẹ luôn dồi dào sức khỏe, ngập tràn niềm vui và bình an trong cuộc sống. Cảm ơn Mẹ đã luôn hy sinh và dành cho con những điều tuyệt vời nhất. Con yêu Mẹ thật nhiều!',
    signature: 'Con của Mẹ'
  },

  // 4. Tiêu đề thiệp lịch (Cảnh 2)
  calendar: {
    headerText: 'Yêu Mẹ ❤'
  },

  // 5. Dòng chữ phát sáng nghiêng 45 độ xoay quanh quả cầu ảnh 3D (Cảnh 4)
  sphereText: '✦  KÍNH CHÚC MẸ 20/10  ✦  SỨC KHỎE DỒI DÀO  ✦  BÌNH AN & HẠNH PHÚC  ✦  MÃI BÊN CHÚNG CON  ',

  // 6. Nhạc nền (Tùy chọn: đặt file mp3 vào thư mục này rồi điền './music.mp3')
  bgmUrl: ''
};
