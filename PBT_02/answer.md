## PHẦN A — KIỂM TRA ĐỌC HIỂU (25đ)

### Câu A1 (5đ) — 10 Input Types
| # | Type | Giao diện | Validation tự động | Use case E-Commerce |
|---|------|-----------|---------------------|---------------------|
| 1 | `type="email"` | Ô text có bàn phím email trên mobile | Kiểm tra có `@` và tên miền | Form đăng ký/đăng nhập tài khoản |
| 2 | `type="password"` | Ô text ẩn ký tự (hiện dấu `•`) | Không (chỉ che hiển thị) | Nhập mật khẩu khi login |
| 3 | `type="tel"` | Ô text, mobile bật bàn phím số | Không( chỉ che hiển thị) | Số điện thoại nhận hàng |
| 4 | `type="number"` | Ô số có mũi tên tăng/giảm | Chỉ cho nhập số, hỗ trợ min/max/step | Số lượng sản phẩm trong giỏ hàng |
| 5 | `type="data"` | Lịch chọn ngày (date picker) | Định dạng YYYY-MM-DD, hỗ trợ min/max | Chọn ngày giao hàng mong muốn |
| 6 | `type="url"` | Ô text, bàn phím có .com | Phải là URL hợp lệ ( có giao thức ) | Nhập website cửa hàng (seller) |
| 7 | `type="range"` | Thanh trượt (slider) | Giới hạn bởi min/max/step | Lọc khoảng giá sản phẩm |
| 8 | `type="color"` | Bảng chọn màu | Giá trị hex hợp lệ | Chọn màu tùy chỉnh cho sản phẩm in ấn |
| 9 | `type="file"` | Nút chọn tệp | Kiểu file qua accept | Upload ảnh đánh giá sản phẩm |
| 10 | `type="search"` | Ô text có nút x xóa nhanh | Không | Thanh tìm kiếm sản phẩm |

### Câu A2 (5đ) — Validation Attributes
| TH | Input | Dựu đoán khi submit | Giải thích |
|---|------|-----------|---------------------|
| 1 | required value="" | Chặn submit, báo "Please fill out this field" | required bắt buộc có giá trị |
| 2 | type="email" value="abc" | Chặn submit, báo "Please include an '@'..." | Thiếu @ + domain |
| 3 | type="number" min=1 max=10 value=15 | Báo "Value must be less than or equal to 10" | 15 > max=10 |
| 4 | pattern="[0-9]{10}" value="abc123" | Báo "Please match the requested format" | Pattern yêu cầu đúng 10 số, "abc123" không khớp |
| 5 | minlength="8" value="123" | Báo "Please lengthen to 8 characters (currently 3)" | Chuỗi chỉ dài 3, thiếu 5 ký tự |
> File kiểm chứng: `validation_test.html`. Screenshot lưu trong `screenshots/validate_*.png`.
> So sánh thực tế với dự đoán: Tất cả 5 trường hợp đều bị trình duyệt chặn submit và hiển thị tooltip đúng như dự đoán.