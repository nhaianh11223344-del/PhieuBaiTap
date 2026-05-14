## PHAN A — Kiem tra doc hieu

### Cau A1 — 5 loai Positioning

| Position | Van chiem cho trong flow? | Tham chieu vi tri | Cuon theo trang? | Use case |
|---|---|---|---|---|
| static | Co | Theo normal flow | Co | Layout mac dinh |
| relative | Co | Theo vi tri cua chinh no (offset tu vi tri cu) | Co | Canh nhe element, tao moc cho child absolute |
| absolute | Khong | Nearest positioned ancestor | Co | Badge, tooltip, modal trong box |
| fixed | Khong | Viewport | Khong | Header, button to top |
| sticky | Co (den khi stick) | Scroll container | Mot phan | Sidebar dinh khi scroll |

**Cau hoi them:**
- `absolute` tham chieu `body` khi khong co ancestor nao dat `position` khac `static`.
- `absolute` tham chieu parent khi parent (hoac ancestor gan nhat) co `position: relative|absolute|fixed|sticky`.
- "Nearest positioned ancestor" la phan tu to tien gan nhat (cha/ong/ba...) co `position` khac `static`. Neu khong co thi tham chieu `html/body`.

### Cau A2 — Flexbox vs Grid (du doan bo cuc)

**Truong hop 1:** 4 items tren 1 hang, moi item chiem 1/4 chieu rong.
```
[1][2][3][4]
```

**Truong hop 2:** width 45% + margin 2.5% => 2 cot, 3 hang cho 6 items.
```
[1][2]
[3][4]
[5][6]
```

**Truong hop 3:** 3 items tren 1 hang, cach deu nhau, can giua theo chieu doc.
```
[1]    [2]    [3]
```

**Truong hop 4:** 3 cot: 200px - 1fr - 200px, 3 items nam tren 1 hang.
```
[1][2][3]
```

**Truong hop 5:** 3 cot, 7 items => 3 hang, item thu 7 nam hang 3 cot 1.
```
[1][2][3]
[4][5][6]
[7][ ][ ]
```

## PHAN C — Suy luan

### Cau C1 — Flexbox vs Grid: khi nao dung gi?
1. Navigation bar ngang: Flexbox (1 chieu, can giua de).
2. Luoi anh Instagram: Grid (luoi nhieu hang/cot deu nhau).
3. Layout blog main + sidebar: Grid (2 cot ro rang) hoac Flexbox neu can don gian.
4. Footer 4 cot: Grid (chia cot deu nhau).
5. Card san pham (anh, text, nut): Flexbox (column) de dung `margin-top: auto`.

### Cau C2 — Debug Flexbox

**Loi 1:** Card khong cung chieu cao, nut nhay len xuong.
- Nguyen nhan: Card khong dung layout column va nut khong duoc day xuong day.
- Sua:
```css
.card { display: flex; flex-direction: column; }
.card .btn { margin-top: auto; }
```

**Loi 2:** Items khong can giua trong container 100vh.
- Nguyen nhan: thieu `justify-content` va `align-items`.
- Sua:
```css
.hero { height: 100vh; display: flex; justify-content: center; align-items: center; }
```

**Loi 3:** Sidebar bi co lai khi content dai.
- Nguyen nhan: flex item mac dinh cho phep shrink.
- Sua:
```css
.sidebar { flex: 0 0 250px; }
```

**Screenshot:** can chup truoc/sau va luu trong folder `screenshots/`.
