# PBT_05 - Answers

## Phan A
### A1 - Viewport & Mobile-First
1) Meta viewport chuan:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: lay chieu rong man hinh thiet bi.
- `initial-scale=1.0`: ti le zoom mac dinh la 1 (khong phai thu nho).
2) Neu thieu the viewport, iPhone se render trang theo chieu rong desktop (thuong ~980px), sau do thu nho lai de vua man hinh. Chu nho, can zoom bang tay.
3) Mobile-First vs Desktop-First:
- Mobile-First: CSS mac dinh cho mobile, mo rong bang `min-width`.
```
.grid { grid-template-columns: 1fr; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
```
- Desktop-First: CSS mac dinh cho desktop, thu nho bang `max-width`.
```
.grid { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```
Ly do khuyen dung Mobile-First: hieu nang tot cho mobile, CSS nho gon, va layout mo rong tu nho -> lon de kiem soat de hon.

### A2 - Breakpoints (Bootstrap)
- 576px (sm): phone ngang. Goi y luoi san pham 2 cot.
- 768px (md): tablet. Goi y 2 cot lon hoac 3 cot nho.
- 992px (lg): laptop nho. Goi y 3 cot.
- 1200px (xl): desktop. Goi y 4 cot.
- 1400px (xxl): man hinh lon. Goi y 5 cot.

### A3 - Media Queries
| Chieu rong man hinh | .container width |
|---------------------|------------------|
| 375px (iPhone SE)   | 100%             |
| 600px               | 540px            |
| 800px               | 720px            |
| 1000px              | 960px            |
| 1400px              | 1140px           |

### A4 - SCSS Basics
1) Variables: luu mau, font, spacing.
```
$primary-color: #1e3a8a;
```
2) Nesting: to chuc CSS long nhau cho de doc.
```
.card { .title { font-weight: 600; } }
```
3) Mixins: tai su dung doan CSS.
```
@mixin flex-center { display: flex; justify-content: center; }
.box { @include flex-center; }
```
4) Extend/Inheritance: ke thua rule.
```
.btn-base { padding: 8px 12px; }
.btn-primary { @extend .btn-base; }
```
Trinh duyet khong doc duoc `.scss` vi no la ngon ngu tien xu ly. Can compile SCSS -> CSS (vd: `sass scss/style.scss scss/style.css`).

## Phan C
### C1 - Phan tich YouTube (3 kich thuoc)
**Screenshots**
- 375px: `screenshots/youtube_375.png`
- 768px: `screenshots/youtube_768.png`
- 1440px: `screenshots/youtube_1440.png`
- Media queries #1: `screenshots/youtube_media1.png`
- Media queries #2: `screenshots/youtube_media2.png`

**Navigation**
- 375px: Thanh tren gon, co hamburger, logo, icon tim kiem va micro. Thanh tim kiem dang an.
- 768px: Thanh tim kiem day du o giua, ben phai co nut Tao va icon thong bao.
- 1440px: Giong 768px nhung rong hon, co nhieu khong gian cho header.

**Grid content**
- 375px: Luoi video 1 cot.
- 768px: Luoi video 2 cot.
- 1440px: Luoi video 3 cot.

**An/ hien phan tu**
- 375px: Sidebar trai thu gon (chi icon), khong hien day du danh muc.
- 768px: Sidebar trai co nhan ten muc (Trang chu, Shorts, Kenh dang ky...).
- 1440px: Sidebar trai day du hon, co nhom muc va danh sach kenh dang ky.

**Font size**
- 375px: Tieu de video nho gon de vua man hinh.
- 768px va 1440px: Tieu de va metadata lon hon, khoang cach giua the thoang hon.

### C2 - Responsive Strategy (Dat ban nha hang)
**Wireframe**
- Mobile: Header (logo + phone), Hero full width, Grid mon an 1 cot, Form dat ban duoi grid, Map an hoac day xuong cuoi, Footer.
- Tablet: Header ngang, Hero full width, Grid mon an 2 cot, Form dat ban ben duoi grid, Map dat canh form hoac duoi.
- Desktop: Layout 2 cot. Cot trai: Hero + Grid 3 cot. Cot phai: Form dat ban + Map. Footer full width.

**CSS skeleton (mobile-first)**
```
.layout { display: grid; gap: 16px; }
.gallery { display: grid; grid-template-columns: 1fr; gap: 12px; }
.main { display: grid; gap: 16px; }

@media (min-width: 768px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .layout { grid-template-columns: 2fr 1fr; }
  .gallery { grid-template-columns: repeat(3, 1fr); }
}
```

## B3 Compile Command
```
sass scss/style.scss scss/style.css
```

## Phan B
### B1 - Responsive Product Page Screenshots
- 375px: `screenshots/B_375.png`
- 768px: `screenshots/B_768.png`
- 1200px: `screenshots/B_1200.png`
