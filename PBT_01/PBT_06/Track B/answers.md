## PHAN A — DOC HIEU (20 diem)
### Cau A1 (10d) — Utility Classes
- flex -> display: flex
- items-center -> align-items: center
- justify-between -> justify-content: space-between
- p-4 -> padding: 1rem (16px)
- bg-white -> background-color: #fff
- shadow-md -> box-shadow trung binh
- rounded-lg -> border-radius lon
- hover:shadow-xl -> hover tang do bong
- transition-shadow -> transition cho box-shadow
- duration-300 -> transition 300ms
- w-16 -> width: 4rem (64px)
- h-16 -> height: 4rem (64px)
- rounded-full -> border-radius: 9999px
- object-cover -> object-fit: cover
- ml-4 -> margin-left: 1rem
- flex-1 -> flex: 1 1 0%
- text-lg -> font-size: 1.125rem
- font-semibold -> font-weight: 600
- text-gray-800 -> mau chu xam dam
- truncate -> 1 dong + ellipsis
- text-sm -> font-size: 0.875rem
- text-gray-500 -> mau chu xam vua
- px-4 -> padding-left/right: 1rem
- py-2 -> padding-top/bottom: 0.5rem
- bg-blue-500 -> nen xanh level 500
- text-white -> mau chu trang
- rounded-md -> bo goc vua
- hover:bg-blue-600 -> hover doi mau nen
- focus:ring-2 -> focus ring 2px
- focus:ring-blue-300 -> ring mau xanh nhat

### Cau A2 (10d) — Responsive & States
1) Prefix responsive:
- md: ap dung tu >= 768px
- lg: ap dung tu >= 1024px
- xl: ap dung tu >= 1280px
VD: md:grid-cols-2 lg:grid-cols-4 -> tablet 2 cot, desktop 4 cot.

2) State modifiers:
- hover: ap dung khi hover
- focus: ap dung khi focus
- active: ap dung khi click/active
- group-hover: ap dung cho con khi parent co class group va dang hover

3) An mobile, hien flex tu tablet tro len:
- hidden md:flex

## PHAN C — PHAN TICH (20 diem)
### Cau C1 (10d) — Tailwind vs CSS thuan
Chon component: product card (PBT truoc).
- HTML file size: Tailwind HTML dai hon vi nhieu class; CSS thuan HTML gon hon.
- Maintainability: Tailwind de sua nhanh tung chi tiet; CSS thuan ro rang neu tach class va dat ten tot.
- Reusability: Tailwind dung lai bang component va class chung, hoac dung @apply trong file CSS neu co build.

### Cau C2 (10d) — Performance
1) Tailwind CSS cuoi cung nho hon Bootstrap vi chi build class dung trong project (JIT) thay vi include tat ca component.
2) PurgeCSS/Tailwind JIT loai bo cac class khong xuat hien trong HTML/JSX, giu lai class dang su dung.
3) Khi khong nen dung Tailwind:
- Du an nho can HTML gon, khong muon class dai.
- Team khong quen utility-first, de code kho doc va kho review.
