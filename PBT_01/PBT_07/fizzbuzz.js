function classicFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let out = "";
        if (i % 3 === 0) out += "Fizz";
        if (i % 5 === 0) out += "Buzz";
        console.log(out === "" ? i : out);
    }
}

function customFizzBuzz(n, rules) {
    const results = [];
    for (let i = 1; i <= n; i++) {
        let out = "";
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                out += rules[j].word;
            }
        }
        results.push(out === "" ? i : out);
    }
    return results;
}

classicFizzBuzz();

const custom = customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

console.log("Custom (1-30):");
console.log(custom);
