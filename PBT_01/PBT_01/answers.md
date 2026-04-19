Phần A

Câu A1
a) Các bước xảy ra gồm:

1.Người dùng nhập URL vào trình duyệt, request được gửi từ laptop đến router trong mạng nội bộ
2.Router chuyển request ra ngoài Internet thông qua nhà cung cấp dịch vụ mạng (ISP)
3.Trình duyệt thực hiện DNS lookup để tìm địa chỉ IP của server chứa website (shopee)
4.Sau khi có IP, trình duyệt thiết lập kết nối và gửi HTTP request đến server
5.Server nhận request, xử lý và trả về dữ liệu của trang (HTML, CSS, JS)
6.Trình duyệt nhận response, sau đó tiến hành render và hiển thị giao diện trang web

b) Tab Network trong DevTools của Chrome cho ta thấy:

-Danh sách toàn bộ các request được gửi đi
-Thông tin chi tiết của từng request (status code, headers, response…)
-Thời gian tải của từng tài nguyên và tổng thời gian load trang
-Các file được tải về như CSS, JS, hình ảnh, font chữ,...
![Ảnh màn hình thông tin của tab network](image.png)

Câu A2
Các lỗi semantic là:
Trang web bị đánh giá SEO thấp do sử dụng sai các thẻ HTML, không thể hiện rõ ý nghĩa nội dung, khiến công cụ tìm kiếm khó hiểu cấu trúc trang.

Các lỗi semantic trong trang web là:

1.Tên sản phẩm dùng thẻ div thay vì thẻ heading
<div class="title">iPhone 16 Pro</div>
sửa
<h2 class="title">iPhone 16 Pro</h2>

2.Phần nội dung chính dùng div thay vì main
<div class="main">...</div>
sửa
<main>...</main>

3.Mỗi sản phẩm là một nội dung độc lập nhưng lại dùng div thay vì article
<div class="product">...</div>
sửa
<article class="product">...</article>

4.Phần header và menu không sử dụng thẻ semantic phù hợp
<div class="header">...</div>
sửa
<header>
    <nav>...</nav>
</header>
5.Phần footer cũng không dùng thẻ footer
<div class="footer">...</div>
sửa
<footer>...</footer>

Câu A3
Kết quả hiển thị
<pre>
--------------------------------
|Hộp 1                         |
|Text A Text B                 |
|Hộp 2                         |
|Text C <strong>Text D</strong>                 |
|Hộp 3                         |
|                              |
|                              |
|                              |
--------------------------------
</pre>
Giải thích
    +Các thẻ <div> là block element nên khi hiển thị sẽ tự động xuống dòng, vì vậy các nội dung như Hộp 1, Hộp 2, Hộp 3 sẽ nằm ở các dòng riêng biệt
    +Các thẻ <span> là inline element nên có thể hiển thị trên cùng một dòng, vì vậy Text A và Text B nằm cùng dòng
    +Thẻ <strong> cũng là inline nên hiển thị cùng dòng với Text C, đồng thời có tác dụng in đậm và nhấn mạnh nội dung bên trong

Câu A4
Sự khác nhau giữa các thẻ <thead>, <tbody>, <tfoot>
    +<thead>: dùng để chứa phần tiêu đề của bảng
    +<tbody>: chứa nội dung chính của bảng
    +<tfoot>: chứa phần tổng kết hoặc ghi chú cuối bảng

Việc không sử dụng <table> để làm layout trang web là vì:
1.Làm giảm SEO do trình duyệt không hiểu được đâu là nội dung chính, đâu là điều hướng
2.Khó thiết kế responsive cho các thiết bị khác nhau như điện thoại và tablet
3.Code trở nên rối và khó bảo trì khi dự án lớn
4.Trang web có thể tải chậm hơn vì phải chờ toàn bộ bảng render xong mới hiển thị

Phần C
Câu C1

<!DOCTYPE html>
<html lang="vi">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Chi tiết sản phẩm - iPhone 16</title> <!-- tiêu đề hiển thị trên tab trình duyệt -->
</head>
<body>
<header> <!-- phần đầu trang chứa logo và menu -->
   <div class="logo">
      <a href="#">ShopLogo</a> <!-- link về trang chủ -->
   </div>
   <nav aria-label="main navigation"> <!-- thanh điều hướng chính -->
      <ul> <!-- danh sách menu -->
         <li><a href="#">Trang chủ</a></li>
         <li><a href="#">Danh mục sản phẩm</a></li>
      </ul>
   </nav>
</header>
<nav aria-label="breadcrumb"> <!-- breadcrumb dùng để điều hướng -->
   <ol> <!-- có thứ tự -->
      <li><a href="#">Trang chủ</a></li>
      <li><a href="#">Điện thoại</a></li>
      <li>iPhone 16</li>
   </ol>
</nav>
<main> <!-- nội dung chính của trang -->
   <section class="product-detail">  
      <section class="product-gallery"> <!-- khu vực ảnh -->
         <h2>Hình ảnh sản phẩm</h2>
         <div class="gallery-list">
            <img src="images/iphone16-1.jpg" alt="iPhone 16 ảnh 1">
            <img src="images/iphone16-2.jpg" alt="iPhone 16 ảnh 2">
            <img src="images/iphone16-3.jpg" alt="iPhone 16 ảnh 3">
            <img src="images/iphone16-4.jpg" alt="iPhone 16 ảnh 4">
            <img src="images/iphone16-5.jpg" alt="iPhone 16 ảnh 5">
         </div>
      </section>
      <section class="product-info"> <!-- thông tin sản phẩm -->
         <h1>iPhone 16</h1>
         <p>
            <data value="25990000">25.990.000đ</data>
         </p>
         <p>★★★★☆ (128 đánh giá)</p>
         <p>Mô tả sản phẩm...</p>
      </section>
      <section class="product-specs"> <!-- bảng thông số -->
         <h2>Thông số kỹ thuật</h2>
         <table>
            <thead>
               <tr>
                  <th>Thông số</th>
                  <th>Chi tiết</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Màn hình</td>
                  <td>6.1 inch OLED</td>
               </tr>
               <tr>
                  <td>Chip</td>
                  <td>A18</td>
               </tr>
            </tbody>
         </table>
      </section>
      <section class="product-reviews"> <!-- đánh giá -->
         <h2>Đánh giá</h2>
         <article>
            <h3>Người dùng A</h3>
            <p>Sản phẩm tốt</p>
         </article>
      </section>
   </section>
   <aside class="similar-products"> <!-- sản phẩm liên quan -->
      <h2>Sản phẩm tương tự</h2>
      <article>
         <img src="images/iphone15.jpg" alt="iPhone 15">
         <h3>iPhone 15</h3>
         <p>22.990.000đ</p>
      </article>
   </aside>
</main>
<footer> <!-- chân trang -->
   <p>&copy; 2026 ShopPhone</p>
   <nav>
      <ul>
         <li><a href="#">Chính sách bảo hành</a></li>
         <li><a href="#">Đổi trả</a></li>
         <li><a href="#">Hỗ trợ</a></li>
      </ul>
   </nav>
</footer>
</body>
</html>