## PHẦN A — KIỂM TRA ĐỌC HIỂU (25đ)

### Câu A1 (5đ) — 3 Cách nhúng CSS

| # | Cách nhúng | Ví dụ code | Ưu điểm | Nhược điểm | Khi nào nên dùng |
|---|------------|------------|---------|------------|------------------|
| 1 | **Inline CSS** | `<p style="color:red;">Hello</p>` | Viết nhanh, áp dụng ngay cho 1 phần tử | Khó bảo trì, lặp code, không tái sử dụng | Test nhanh hoặc chỉnh riêng 1 phần tử |
| 2 | **Internal CSS** | `<style> p { color: blue; } </style>` | Quản lý CSS cho 1 trang trong cùng file HTML | Không tái sử dụng giữa nhiều trang | Trang đơn, demo nhỏ |
| 3 | **External CSS** | `<link rel="stylesheet" href="style.css">` | Dễ bảo trì, tái sử dụng, code gọn | Phải tải thêm file CSS | Website thực tế, nhiều trang |

**Nếu cùng 1 element có cả 3 cách cùng áp dụng thì thứ tự ưu tiên là:**

**Inline > Internal > External**

Lý do: CSS áp dụng theo **cascade**. Inline style gắn trực tiếp vào element nên có **specificity cao hơn**.

### Câu A2 (8đ) — CSS Selectors

| # | Selector | Chọn element nào |
|---|----------|------------------|
| 1 | `h1` | **ShopTLU** |
| 2 | `.price` | **25.990.000đ**, **45.990.000đ** |
| 3 | `#app header` | Toàn bộ thẻ `<header>` chứa **ShopTLU, Home, Products, About** |
| 4 | `nav a:first-child` | **Home** |
| 5 | `.product.featured h2` | **MacBook Pro** |
| 6 | `article > p` | **25.990.000đ**, **Mô tả sản phẩm...**, **45.990.000đ**, **Mô tả sản phẩm...** |
| 7 | `a[href="/"]` | **Home** |
| 8 | `.top-bar.dark h1` | **ShopTLU** |

> File kiểm chứng: `selectors_test.html`  
> Screenshot lưu trong `screenshots/h1.png`

### Câu A3 (7đ) — Box Model
#### Trường hợp 1 — `content-box`

- **Chiều rộng hiển thị** = `400 + 20*2 + 5*2 = 450px`
- **Không gian chiếm trên trang** = `450 + 10*2 = 470px`

#### Trường hợp 2 — `border-box`

- **Chiều rộng hiển thị** = `400px`
- **Kích thước content thực tế** = `400 - 40 - 10 = 350px`
- **Không gian chiếm trên trang** = `400 + 20 = 420px`

#### Trường hợp 3 — Margin collapse

- `.box-a { margin-bottom: 25px; }`
- `.box-b { margin-top: 40px; }`

**Khoảng cách giữa 2 box = 40px**

Lý do: margin dọc của block **không cộng**, browser lấy **margin lớn hơn**.

**Không phải 65px** vì xảy ra hiện tượng **margin collapse**.

#### Nâng cao

- `.box-a { margin-bottom: -10px; }`
- `.box-b { margin-top: 40px; }`

**Khoảng cách = 30px**

Vì `40 + (-10) = 30`.

### Câu A4 (5đ) — Specificity
| Rule | Selector | Specificity |
|------|----------|-------------|
| A | `p` | `(0,0,1)` |
| B | `.price` | `(0,1,0)` |
| C | `#main-price` | `(1,0,0)` |
| D | `p.price` | `(0,1,1)` |

1. **Rule thắng là Rule C (`#main-price`)**

Vì selector chứa **id** có specificity cao nhất.

2. **Màu cuối cùng: `red`**

3. Nếu thêm:

```html
<p class="price" id="main-price" style="color: orange;">
```
- **Thì màu cuối cùng sẽ là orange.**
- **Vì **important** ưu tiên cao hơn các rule thường.**

## PHẦN C — DEBUG & SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Debug CSS Layout
1. Tính chiều rộng thực tế
- Sidebar
```css
.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
}
```
- Chiều rộng thực tế:
300 + 20 + 20 + 1 + 1 = 342px
```css
Content
.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
}
```
- Chiều rộng thực tế:
    660 + 30 + 30 + 1 + 1 = 722px
2. Giải thích tại sao layout bị vỡ
- Tổng chiều rộng thực tế:
    342 + 722 = 1064px
- Trong khi .container chỉ rộng:
    960px
- Do tổng kích thước lớn hơn container nên .content không còn đủ chỗ nằm cạnh .sidebar.
- Vì cả hai đều float: left, browser sẽ đẩy .content xuống dòng mới.
3.Hai cách sửa
Cách 1 — Dùng border-box
* {
    box-sizing: border-box;
}
- Khi dùng border-box:
    - Width sẽ bao gồm cả padding + border
    - Sidebar thực tế = 300px
    - Content thực tế = 660px
- Tổng:
    300 + 660 = 960px
→ Layout hiển thị đúng.

Cách 2 — Không dùng border-box
Giảm width của .content.
- Sidebar thực tế:
    - 342px
- Container:
    - 960px
- Phần còn lại cho content:
    960 - 342 = 618px
- Content có:
    - padding: 60px
    - border: 2px
- Width content mới:
    618 - 60 - 2 = 556px
- Sửa:
```css
.content {
    width: 556px;
}
```
### Câu C2 (10đ) — Cascade Puzzle
1. "Sản phẩm A" (h2)
```html
<h2 class="title highlight">Sản phẩm A</h2>
```
- Font-size
- Rule áp dụng:
```css
.card .title {
    font-size: 20px;
}
```
- Kết quả:
    font-size = 20px
- Color
    - Các rule liên quan:
```css
#featured .title {
    color: red;
}
.highlight {
    color: green !important;
}
```
**.highlight** có **!important** nên thắng tất cả rule thường.
- Kết quả:
    color = green
2."Mô tả sản phẩm"
```html
<p>Mô tả sản phẩm</p>
```
- Rule:
```css
.card {
    color: blue;
}
```
- và:
```css
.card p {
    color: inherit;
}
```
- inherit nghĩa là kế thừa màu từ phần tử cha .card.
- Kết quả:
    color = blue
3."Sản phẩm B" (h2)
```html
<h2 class="title">Sản phẩm B</h2>
```
- Font-size
- Rule:
```css
.card .title {
    font-size: 20px;
}
```
- Kết quả:
```css
font-size = 20px
```
```css
- Color Không có:
.highlight
#featured
Nên kế thừa từ:
.card {
    color: blue;
}
```
- Kết quả:
    color = blue
4."Mô tả sản phẩm B"
```html
<p class="highlight">Mô tả sản phẩm B</p>
```
- Rule:
```css
.highlight {
    color: green !important;
}
```
- Kết quả:
    - color = green
    - Vì !important có độ ưu tiên cao hơn inheritance và các rule thông thường.

## PHẦN B — THỰC HÀNH CODE (55 điểm)
### Bài B1 (20đ) — Style trang Profile
| # | Loại selector | Ví dụ trong `style.css` | Tác dụng |
|---|---------------|-------------------------|----------|
| 1 | Universal | `* { box-sizing: border-box; }` | Reset toàn bộ element |
| 2 | Element | `body`, `h1`, `table` | Style theo tag |
| 3 | Class | `.container`, `.active` | Style theo class |
| 4 | ID | `#profile` (nếu dùng) | Style 1 element duy nhất |
| 5 | Descendant | `header nav a` | Selector lồng nhau |
| 6 | Pseudo-class | `a[href^="http"]` | Theo thuộc tính |
| 7 | Attribute | `a[href^="http"]` | Theo thuộc tính |
| 8 | Group | `h1, h2, h3` | Áp dụng cho nhiều selector |

### Bài B3 (15đ) — Specificity Battl

- 10 rules + specificity score
| # | rule | specificity score |
|---|------|-------------------|
| 1 | `p` | — (0,0,1) |
| 2 | `.text` | — (0,1,0) |
| 3 | `p.text` | — (0,1,1) |
| 4 | `.text.highlight` | — (0,2,0) |
| 5 | `p.text.highlight` | — (0,2,1) |
| 6 | `#demo` |— (1,0,0) |
| 7 | `p#demo` | — (1,0,1) |
| 8 | `#demo.text` | — (1,1,0) |
| 9 | `p#demo.text` | — (1,1,1) |
| 10 | `p#demo.text.highlight`  — (1,2,1) |

- Element cuoi cung hien thi mau gi? Tai sao?
Mau cuoi cung la **red** vi selector `p#demo.text.highlight` co specificity cao nhat (1,2,1), nen no thang tat ca rule con lai.

- Screenshot ket qua
Can chup va luu screenshot (goi y: `screenshoots/specificity_screenshoot.png`).

- Thay doi thu tu rules trong CSS file. Ket qua co doi khong? Giai thich.
Khong doi neu cac rule co specificity khac nhau, vi CSS uu tien specificity cao hon thu tu khai bao. Chi khi hai rule cung specificity thi thu tu trong file moi anh huong.
