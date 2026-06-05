function runBlock(label, fn) {
    console.log("\n--- " + label + " ---");
    try {
        fn();
    } catch (err) {
        console.log("Error:", err.name + ":", err.message);
    }
}

runBlock("Doan 1", function () {
    console.log(x);
    var x = 5;
    console.log("x =", x);
});

runBlock("Doan 2", function () {
    console.log(y);
    let y = 10;
    console.log("y =", y);
});

runBlock("Doan 3", function () {
    const z = 15;
    z = 20;
    console.log(z);
});

runBlock("Doan 4", function () {
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
});

runBlock("Doan 5", function () {
    let a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoai block:", a);
});
