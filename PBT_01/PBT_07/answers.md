Phan A

## PHAN A — KIEM TRA DOC HIEU

### Cau A1 — var / let / const

| Doan | Ket qua du doan | Giai thich nhanh |
|---|---|---|
| 1 | `undefined` | `var` hoist khai bao, gia tri chua gan |
| 2 | `ReferenceError: Cannot access 'y' before initialization` | `let` bi TDZ |
| 3 | `TypeError: Assignment to constant variable.` | `const` khong cho gan lai |
| 4 | `[1, 2, 3, 4]` | `const` giu tham chieu, array van push duoc |
| 5 | Trong block: 2, Ngoai block: 1 | `let` block-scope |

### Cau A2 — Data Types & Coercion

| Bieu thuc | Ket qua |
|---|---|
| `typeof null` | `"object"` |
| `typeof undefined` | `"undefined"` |
| `typeof NaN` | `"number"` |
| `"5" + 3` | `"53"` |
| `"5" - 3` | `2` |
| `"5" * "3"` | `15` |
| `true + true` | `2` |
| `[] + []` | `""` |
| `[] + {}` | `"[object Object]"` |
| `{ } + []` | `"[object Object]"` |

Giai thich: toan tu `+` uu tien noi chuoi neu gap string; `-` va `*` luon ep ve so.

### Cau A3 — So sanh == vs ===

| Bieu thuc | Ket qua |
|---|---|
| `5 == "5"` | `true` |
| `5 === "5"` | `false` |
| `null == undefined` | `true` |
| `null === undefined` | `false` |
| `NaN == NaN` | `false` |
| `0 == false` | `true` |
| `0 === false` | `false` |
| `"" == false` | `true` |

Quy tac: uu tien `===` de tranh ep kieu bat ngo.

### Cau A4 — Truthy & Falsy

Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

Du doan:
- `"0"` -> in A
- `""` -> khong in B
- `[]` -> in C
- `{}` -> in D
- `null` -> khong in E
- `0` -> khong in F
- `-1` -> in G
- `" "` -> in H

### Cau A5 — Template Literals
```javascript
// Cach 1
var greeting = `Xin chao ${name}! Ban ${age} tuoi.`;

// Cach 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cach 3
var html = `<div class="card">` +
    `<h2>${title}</h2>` +
    `<p>${description}</p>` +
    `<span>Gia: ${price}d</span>` +
    `</div>`;
```

## PHAN C — SUY LUAN

### Cau C1 — Loi va cach sua
1) `phanTramGiam` can check input (khong am, la so).
2) `giaBan` trong test la string -> can ep so hoac bao loi input.
3) `if (giaSauGiam = 0)` la gan gia tri -> doi thanh `=== 0`.
4) Nen them check `Number.isFinite` cho ca `giaBan` va `phanTramGiam`.
5) `setTimeout` trong vong lap dung `var` -> tat ca in cung `5`; doi `var` thanh `let`.
6) `phanTramGiam` > 100 tra ve string -> can thong bao loi ro rang.
