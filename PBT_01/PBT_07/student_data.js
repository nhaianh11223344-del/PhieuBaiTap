const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Binh", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dung", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

function avgScore(s) {
    return s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;
}

function rankByAvg(avg) {
    if (avg >= 8) return "Gioi";
    if (avg >= 6.5) return "Kha";
    if (avg >= 5) return "Trung binh";
    return "Yeu";
}

let countGioi = 0;
let countKha = 0;
let countTrungBinh = 0;
let countYeu = 0;

let maxAvg = -Infinity;
let minAvg = Infinity;
let maxStudent = null;
let minStudent = null;

let sumMath = 0;
let sumPhysics = 0;
let sumCs = 0;

let sumMathM = 0;
let sumPhysicsM = 0;
let sumCsM = 0;
let countM = 0;

let sumMathF = 0;
let sumPhysicsF = 0;
let sumCsF = 0;
let countF = 0;

console.log("| STT | Ten    | TB   | Xep loai     |");
console.log("|-----|--------|------|--------------|");

for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const avg = avgScore(s);
    const rank = rankByAvg(avg);

    if (rank === "Gioi") countGioi++;
    else if (rank === "Kha") countKha++;
    else if (rank === "Trung binh") countTrungBinh++;
    else countYeu++;

    if (avg > maxAvg) {
        maxAvg = avg;
        maxStudent = s.name;
    }
    if (avg < minAvg) {
        minAvg = avg;
        minStudent = s.name;
    }

    sumMath += s.math;
    sumPhysics += s.physics;
    sumCs += s.cs;

    if (s.gender === "M") {
        countM++;
        sumMathM += s.math;
        sumPhysicsM += s.physics;
        sumCsM += s.cs;
    } else if (s.gender === "F") {
        countF++;
        sumMathF += s.math;
        sumPhysicsF += s.physics;
        sumCsF += s.cs;
    }

    const avgText = avg.toFixed(1);
    const stt = String(i + 1).padEnd(3, " ");
    const name = s.name.padEnd(6, " ");
    const tb = avgText.padEnd(4, " ");
    const rankText = rank.padEnd(12, " ");
    console.log(`| ${stt} | ${name} | ${tb} | ${rankText} |`);
}

console.log("\nThong ke xep loai:");
console.log("Gioi:", countGioi);
console.log("Kha:", countKha);
console.log("Trung binh:", countTrungBinh);
console.log("Yeu:", countYeu);

console.log("\nCao nhat:", maxStudent, maxAvg.toFixed(1));
console.log("Thap nhat:", minStudent, minAvg.toFixed(1));

console.log("\nDiem TB toan lop tung mon:");
console.log("Math:", (sumMath / students.length).toFixed(2));
console.log("Physics:", (sumPhysics / students.length).toFixed(2));
console.log("CS:", (sumCs / students.length).toFixed(2));

if (countM > 0) {
    console.log("\nTB theo gioi tinh (M):");
    console.log("Math:", (sumMathM / countM).toFixed(2));
    console.log("Physics:", (sumPhysicsM / countM).toFixed(2));
    console.log("CS:", (sumCsM / countM).toFixed(2));
}

if (countF > 0) {
    console.log("\nTB theo gioi tinh (F):");
    console.log("Math:", (sumMathF / countF).toFixed(2));
    console.log("Physics:", (sumPhysicsF / countF).toFixed(2));
    console.log("CS:", (sumCsF / countF).toFixed(2));
}
