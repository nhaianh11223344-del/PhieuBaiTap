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

### Câu A3 (5đ) — Accessibility
1. **`<label for="email">` quan trọng cho screen reader** vì khi screen reader di chuyển đến input `#email`, nó sẽ **đọc lên nội dung label** tương ứng , giúp người khiếm thị biết ô này nhập gì. Ngoài ra `label` giúp click vào chữ
2. **`<fieldset>` + `<legend>`** dùng khi nhóm nhiều input có liên quan về ngữ nghĩa . Ví dụ:
     ```html
     <fieldset>
        <legend>Giới tính</legend>
        <input type="radio" id="male" name="gender"><label for="male">Nam</label>
        <input type="radio" id="female" name="gender"><label for="female">Nữ</label>
     </fieldset>
     ```
     Screen reader sẽ đọc "Giới tính, Nam, radio button 1/2" giúp user hiểu bối cảnh nhóm lựa chọn.

3. **`aria-label`** dùng khi input **không có label trực quan** (ví dụ ô search chỉ có icon kính lúp). KHÔNG nên dùng `aria-label` khi đã có `<label>` vì:
    - Gây **trùng lặp** (screen reader ưu tiên `aria-label`, có thể bỏ qua label hiển thị).
    - Mất đồng bộ: chữ trên UI một đằng, screen reader đọc một nẻo -> khó maintain.
    - `<lavel>` có sẵn lợi ích click-to-focus mà `<aria-label>` không cho.

### Câu A4 (5đ) — Media
1. **`loading="lazy"`**: Trình duyệt trì hoãn tải ảnh đến khi user cuộn gần vào viewport. Cải thiện **thời gian load trang ban đầu** và **tiết kiệm băng thông**. **Không nên** dùng cho ảnh nằm ngay trong viewport đầu (above-the-fold), vì sẽ làm chậm LCP (Largest Contentful Paint).

2. **Nhiều `<source>` trong `<video>`** để trình duyệt chọn format mà nó hỗ trợ - tránh lỗi "không phát được". 3 format phổ biến: **MP4 (H.264)**, **WebM (VP9/AV1)**, **Ogg (Theora)**.

3. **`alt`** mô tả ảnh cho screen reader, hiển thị khi ảnh lỗi, và giúp SEO.
   - iPhone 16: `alt="iPhone 16 Pro Max 256GB màu Titan Tự Nhiên, mặt trước"`
   - Decorative: `alt=""` (Chuỗi rỗng - báo screen reader bỏ qua)
   - Biểu dồ doanh thu: `alt="Biểu đồ cột doanh thu Q1/2026: tháng Q1/2026: tháng 1 đạt 2 tỷ, tháng 2 đạt 2.5 tỷ, tháng 3 đạt 3.2 tỷ, tăng trưởng 60%"`

### Câu A5 (5đ) — So sánh `<figure>` vs `<img>`
- **Cách 1 (`<img>` trần):** Dùng khi ảnh là **phần tử trang trí/minh họa nhỏ**, không cần chú thích.
   - VD1: Icon giỏ hàng trên navbar.
   - VD2: Avatar người dùng trong bình luận.

- **Cách 2 (`<figure>` + `<figcation>`):** DÙng khi ảnh là **nội dung độc lập** có chú thích cần đọc cùng.
   -VD1: Ảnh sản phẩm kèm tên + giá trong catalog.
   -VD2: Ảnh biểu đồ/infographic trong bài blog có ghi nguồn.

## PHẦN C — PHÂN TÍCH & SUY LUẬN (20 điểm)
### CÂU C1
| STT LỖI | DÒNG LỖI | LỖI | VI PHẠM | SỬA |
|---------|----------|-----|---------|-----|
| Lỗi 1 | Dòng 2 | Input **"Tên"** không có thẻ `<label for="...">` | Vi phạm accessibility |  <label for="name">Tên:</label> <input type="text" id="name" name="name" required> |
| LỖI 2 | Dòng 2 | Input **name** không có thuộc tính `name` | Vi phạm form best practice | <label for="name">Tên:</label> <input type="text" id="name" name="name" required> |
| LỖI 3 | Dòng 4 | Input **email** không có `<label for="...">` | Vi phạm accessibility | <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="Email của bạn"> |
| LỖI 4 | Dòng 6 | Input **password** không có thẻ `<label for="...">` | Vi phạm accessibility | <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8"> |
| LỖI 5 | Dòng 7 | Input **nhập lại mật khẩu** không có `<label for="...">` và không có thuộc tính `name` | Vi phạm accessibility và form best practice | <label for="confirm">Nhập lại mật khẩu:</label> <input type="password" id="confirm" name="confirm" required minlength="8"> |
| LỖI 6 | Dòng 9 | Input **Phone** đang dùng `type="text"` thay vì `type="tel"`, đồng thời không có `pattern` | Vi phạm semantic HTML và validation best practice | <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567" required> |
| LỖI 7 | Dòng 11 | Thẻ `<select>` không có `<label for="...">` và không có thuộc tính `name` | Vi phạm accessibility và form best practice | <label for="city">Thành phố:</label> <select id="city" name="city" required> <option value="">Chọn thành phố</option> <option>Hà Nội</option> <option>TP.HCM</option> </select> |
| LỖI 8 | Dòng 16 | Label **"Tôi đồng ý điều khoản"** không liên kết với `input checkbox` và không có checkbox thật | Vi phạm accessibility và validation | <input type="checkbox" id="agree" name="agree" required> <label for="agree">Tôi đồng ý điều khoản</label> |
### CÂU C2
1. **Regex pattern**
   - **CMND/CCCD (đúng 12 chữ số):**
     ```html
     pattern="[0-9]{12}"
     ```
     Chỉ chấp nhận đúng **12 ký tự số**, không nhiều hơn, không ít hơn.

   - **Số tài khoản (10–15 chữ số):**
     ```html id="f8m72i"
     pattern="[0-9]{10,15}"
     ```
     Chỉ chấp nhận **tối thiểu 10 số** và **tối đa 15 số**.

2. **HTML5 validation đã đủ an toàn cho ứng dụng ngân hàng chưa?**

   **Chưa đủ.**  
   HTML5 validation chỉ chạy ở **frontend (trình duyệt của user)**.

   User hoàn toàn có thể:
   - Tắt validation của trình duyệt
   - Sửa HTML bằng DevTools
   - Gửi request trực tiếp bằng Postman/cURL/script

   Vì vậy HTML5 validation chỉ giúp **lọc lỗi nhập liệu cơ bản**, còn với ứng dụng ngân hàng thì **backend bắt buộc phải validate lại toàn bộ dữ liệu** trước khi xử lý.

3. **Ba loại validation HTML5 không thể làm được (phải dùng JavaScript hoặc backend)**

   - **So sánh giá trị giữa 2 field**  
     Ví dụ: *Nhập lại mật khẩu phải giống mật khẩu gốc.*

   - **Kiểm tra dữ liệu đã tồn tại trong hệ thống chưa**  
     Ví dụ: *Email này đã đăng ký chưa? CMND/CCCD này đã tồn tại chưa?*

   - **Kiểm tra logic nghiệp vụ phức tạp**  
     Ví dụ: *Khách hàng phải đủ 18 tuổi mới được mở tài khoản.*

4. **Hai rủi ro bảo mật nếu chỉ validate ở frontend**

   - **Bypass validation**  
     Kẻ xấu có thể bỏ qua kiểm tra của trình duyệt và gửi dữ liệu giả trực tiếp lên server.

   - **Dữ liệu xấu đi vào hệ thống**  
     Nếu backend không kiểm tra lại, có thể lưu dữ liệu sai định dạng, gây lỗi nghiệp vụ hoặc tạo lỗ hổng bảo mật.

## PHẦN B — THỰC HÀNH CODE (55 điểm)
### Bài B1 (20đ) — Form Đăng ký Tài khoản

File code: [`register.html`](register.html)

**Câu trả lời:** HTML5 validation chỉ cho phép so sánh giá trị của một input với **bằng số tĩnh** khai báo trong attribute (như `pattern="..."`, `minlength="8"`, `min="1"`). nÓ **không có cú pháp tham chiếu đến giá trị của input khác**.

Cụ thể:
- `pattern` nhận một regex cố định, không phải biến.
- `minlength`/`maxlength`/`min`/`max` nhận số cố định.
- Không có attribute kiểu `equalto="#pwd"` trong chuẩn HTML.

Vì vậy, để check `pwd2 == pwd`, bắt buộc phải dùng **JavaScript**

### B2 & B3 — Ghi chú
- [`media.html`](media.html): Để chạy được ngay khi mở file, nên bài đã dùng nguồn online công khai:
   - **Ảnh:** `placeholder.co` (placeholder service).
   - **Video** `<video>`:** `Big Buck Bunny` (mp4 từ Google Cloud Storage, webm từ Wikimedia Commons).
   - **Audio `<audio>`:** `horse.mp3 / horse.ogg` từ w3schools.
   - **Iframe YouTube:** một video public bất kỳ.

- [`checkout.html`](checkout.html): Đã có 3 bonus (`<datalist`, `<output>`, `<meter>`) và `aria-label` ở nút submit. 