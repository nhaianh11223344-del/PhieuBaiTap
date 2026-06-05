const items = [
    { name: "Pho bo", price: 65000, qty: 2 },
    { name: "Tra da", price: 5000, qty: 3 },
    { name: "Bun cha", price: 55000, qty: 1 }
];

const isWednesday = new Date().getDay() === 3; // Wednesday = 3
const includeTip = true;

function formatMoney(value) {
    const s = Math.round(value).toString();
    let out = "";
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        out = s[i] + out;
        count++;
        if (count % 3 === 0 && i !== 0) out = "." + out;
    }
    return out + "d";
}

function padRight(text, width) {
    return text + " ".repeat(Math.max(0, width - text.length));
}

let subtotal = 0;
for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty;
}

let discountRate = 0;
if (subtotal > 1000000) discountRate = 0.15;
else if (subtotal > 500000) discountRate = 0.1;

if (isWednesday) discountRate += 0.05;

const discount = subtotal * discountRate;
const afterDiscount = subtotal - discount;
const vat = afterDiscount * 0.08;
const tip = includeTip ? afterDiscount * 0.05 : 0;
const total = afterDiscount + vat + tip;

const lineWidth = 38;
function line(text) {
    const content = padRight(text, lineWidth);
    return "|" + content + "|";
}

console.log("+" + "-".repeat(lineWidth) + "+");
console.log(line("HOA DON NHA HANG"));
console.log("+" + "-".repeat(lineWidth) + "+");

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const totalItem = item.price * item.qty;
    const left = (i + 1) + ". " + padRight(item.name, 10) + "x" + item.qty;
    const right = "@" + (item.price / 1000) + "k = " + (totalItem / 1000) + "k";
    const row = padRight(left, 22) + padRight(right, 16);
    console.log(line(row));
}

console.log("+" + "-".repeat(lineWidth) + "+");
console.log(line(padRight("Tong cong:", 24) + formatMoney(subtotal)));
console.log(line(padRight("Giam gia (" + (discountRate * 100).toFixed(0) + "%):", 24) + formatMoney(discount)));
console.log(line(padRight("VAT (8%):", 24) + formatMoney(vat)));
console.log(line(padRight("Tip (5%):", 24) + formatMoney(tip)));
console.log("+" + "-".repeat(lineWidth) + "+");
console.log(line(padRight("THANH TOAN:", 24) + formatMoney(total)));
console.log("+" + "-".repeat(lineWidth) + "+");
