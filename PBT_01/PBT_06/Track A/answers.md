## PHẦN A — ĐỌC HIỂU (20 điểm)
### Câu A1 (10đ) — Grid System
```html
<div class=col-12 col-md-6 col-lg-3>Box</div>   <!-- x 4 -->
```

| Kích thước | < 768px (xs/sm) | 768px - 991px (md) | >= 992px (lg, xl, xxl) |
|------------|-----------------|--------------------|--------------------|
| Class chính áp dụng | `col-12` | `col-md-6` | `col-lg-3` |
| Số cột (mỗi box chiếm) | 12/12 = full | 6/12 = nửa | 3/12 = 1/4 |
| **Bố cục** | 4 hàng x 1 cột | 2 hàng x 2 cột | 1 hàng x 4 cột |

```
< 768px              768-991px              ≥ 992px
┌──────────┐         ┌─────┬─────┐         ┌──┬──┬──┬──┐
│  Box 1   │         │  1  │  2  │         │1 │2 │3 │4 │
├──────────┤         ├─────┼─────┤         └──┴──┴──┴──┘
│  Box 2   │         │  3  │  4  │
├──────────┤         └─────┴─────┘
│  Box 3   │
├──────────┤
│  Box 4   │
└──────────┘
```

**`col-md-6` nghĩa là:** Ở breakpoint **md trở lên (>= 768px)**, element chiếm **6/12 cột (=50%)**. Bootstrap dùng grid 12 cột.

**Tại sao không cần viết `col-sm-12`?** Vì class `col-12` (không có infix) đã áp dụng cho **TẤT CẢ** kích thước từ x5 trở lên. Khi tới breakpoint md, `col-md-6` ghi đè (mobile-first). `col-sm-12` là dư thừa.

### Câu A2 (10đ) — Utilities & Components
**1. Giải thích class**
- d-none = display: none ở mọit viewport -> **ẩn**
- d-md-block = display: block ở viewport >= 768px -> ghi đè, **hiện lại.**
- Tổng kết: **ẩn dưới 768px, hiện block từ tablet trở lên.** Hay dùng cho sidebar/banner desktop.

**2. Spacing ultilities** - format `{property}{sides}-{breakpoint?}-{size}` :

| Class | Ý nghĩa |
|-------|---------|
| `mt-3` | margin-top: 1rem (16px). Số 0-5 = 0/.25/.5/1/1.5/3 rem. |
| `px-4` | padding-left + padding-right: 1.5rem |
| `mb-auto` | margin-bttom: auto (đẩy element lên đỉnh trong flex parent) |
| `m-lg-5` | margin: 3rem khi >= 992px (responsive prefix) |
| `gx-0` | gutter-x: 0 (xóa khoảng cách ngang giữa cột trong `.row`) |

Cú pháp đầy đủ : `m|p` + `t|b|s|e|x|y|blank` + `-{bp}` + `-{0..5|auto}`.

**3. `.container` vs `.container-fluid` vs `.container-md`:**

| Class | Hành vi |
|-------|---------|
| `.container` | `max-width` thay đổi theo breakpoint (540/720/960.1140.1320). Có margin auto 2 bên. |
| `.container-fluid` | Luôn `width: 100%` ở mọi viewport. Không bao giờ co lại. |
| `.container-md` | `width: 100%` cho đến khi đạt breakpoint **md (768px)**, sau đó áp `max->width` như `.container`. Dưới 768px nó "fluid", từ 768 trở về nó "fixed". |

## PHẦN C — PHÂN TÍCH (20 điểm)
### Câu C1 (10đ) — Tùy biến Bootstrap
**1. Quy trình đổi `$primary` sang `#E63946`:**

Cần: Node.js + npm + Sass + Bootstrap source (không phải bản CDN).

```bash
npm init -y
npm install bootstrap sass --save-dev
```

Tạo `scss/custom.scss`:
```scss
// 1. Override variable TRƯỚC khi import bootstrap
$primary: #E63946;
$secondary: #457B9D;

// 2. Optional: thêm custom map nếu muốn thêm màu mới
// $custom-colors: ("tertiary": #A8DADC );
// $theme-colors: map-merge($theme-colors, $custom-colors);

// 3. Import bootstrap source
@import "../node_modules/bootstrap/scss/bootstrap";
```

Compile:
```bash
sass scss/custom.scss css/bootstrap.custom.css --load-path=node_modules
```

Trong HTML thay link CDN bằng:
```html
<link rel="stylesheet" href="css/bootstrap.custom.css">
```

-> Tất cả `.btn-primary`, `.bg-primary`, `.text-primary`, `.border-primary`, alert, badge, link... **đều tự đổi sang #E63945**.

**2. Tại sao không override trực tiếp `.btn-primary {background: red; }`?**
- **Sai 1 chỗ, thiếu hàng chục chỗ khác:** `.btn-primary` còn có hover, focus, active, disabled state, focus-ring color, hover background bị compute từ `&primary` qua hàm ` darken()`. Override thủ công sẽ tốn cả trăm dòng.
- **Không lan sang component khác:** `.text-primary`, `.bg-primary`, `.alert-primary`, `.badge text-bf-primary`, `.link-primary`, `.border-primary`, `.progress-bar` đều dùng `$primary`. SASS variable đổi 1 chỗ -> tất cả update đồng bộ.
- **Specificity & maintainability:** Override sau cùng dễ bị Bootstrap update CSS phá. SASS variables sửa nguồn -> bền vững.
- **Bundle size:** Override thêm code = file CSS phồng to. SASS chỉ tái compile cùng kích thước.

### Câu C2 (10đ) — So sánh CSS thuần vs Bootstrap

**Navbar responsive + product card:**

| Tiêu chí | CSS thuần (PBT_04 (../PBT_04/flexbox.css)) | Bootstrap |
|----------|--------------------------------|-----------|
| Số dòng CSS phải viết | ~150 dòng (navbar + card + responsive) | ~0 dòng (chỉ HTML classes) |
| Thời gian phát triển | 30-60 phút (chỉ riêng phần navbar) | 5-10 phút (copy mẫu, thay text) |
| Khả năng tùy biến | **Cao** - full control mọi pixel | **Thấp hơn** - phải override hoặc Sass build | 
| File size browser tải | Vài KB CSS riêng | ~233 KB CSS (full bundle) - nặng nếu chỉ dùng component |
| Đường cong học | Khó hơn (phải nắm flex/grid/media query) | Dễ hơn (đọc cheatsheet là code được) |
| Trang nhìn "lạ" hay "giống nghìn site khác" | Lạ, riêng biệt | Hơi đồng phục Bootstrap (Bootswatch giúp giảm) |

**Khi NÊN dùng Bootstrap:**
- Trang admin/dashboard nọi bộ -> cần ra nhanh, không cần đẹp riêng.
- MVP / prototype để pitch khách hàng -> tốc độ > thẩm mỹ.
- Đội ngũ junior nhiều, cần consistency và pattern cố định.
- Trang nội dung tĩnh (blog,doc) cần grid + components cơ bản.

**Khi KHÔNG NÊN dùng Bootstrap:**
- Trang thương hiệu / marketing cần thiết kế độc nhất (Apple, Stripe, Linear).
- App có design system riêng (Material/Figma file riêng) - dùng Bootstrap sẽ "đè" lên design tokens.
- Trang siêu tối ưu performance (Lighthouse 100/100) - 232KB CSS quá nặng cho 1 landing nhỏ.
- Đã dùng UI framework khác (Ant Design, MUI, Chakra...) - Không nên trộn.

## TÓM TẮT PHẦN B (chi tiết xem file HTML)
## B1 — Landing Page -> [`bootstrap_landing.html`](bootstrap_landing.html)
- Navbar `navbar-expand-lg` có collapse mobile.
- Carousel 3 slides + overlay text.
- Product grid `col-12 col-md-6 col-lg-3` (1->2->4 cột).
- Cards với `card-img-top`, badge "Sale" `position-absolute`.
- Modal "Xem nhanh" mở chi tiết sản phẩm.
- Footer 4 cột `col-md-3`.

### B2 — Dashboard -> [`bootstrap_dashboard.html`](bootstrap_dashboard.html)
- Sidebar `position-fixed` + `list-group`.
- Topbar có breadcrumb + user dropdown.
- 4 stat cards màu (`bg-primary/success/warning/danger`).
- Bảng đơn hàng `table-striped table-hover`.
- Form filter `input-group`.
- Accordion FAQ.
- Alert thành công.