function startGame() {
    const secret = Math.floor(Math.random() * 100) + 1;
    const maxAttempts = 7;
    let attempts = 0;
    const seen = [];

    while (attempts < maxAttempts) {
        const input = prompt("Nhap so 1-100 (lan " + (attempts + 1) + "/" + maxAttempts + "):");
        if (input === null) {
            alert("Thoat game.");
            return;
        }

        const guess = Number(input);
        if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
            alert("Gia tri khong hop le. Chi nhap so 1-100.");
            continue;
        }

        if (seen.indexOf(guess) !== -1) {
            alert("Ban da doan so nay roi!");
            continue;
        }

        seen.push(guess);
        attempts++;

        if (guess === secret) {
            alert("Dung roi! Ban doan dung sau " + attempts + " lan!");
            return;
        }

        if (guess < secret) {
            alert("Cao hon!");
        } else {
            alert("Thap hon!");
        }
    }

    alert("Het luot. So dung la: " + secret);
}

document.getElementById("start-btn").addEventListener("click", startGame);
