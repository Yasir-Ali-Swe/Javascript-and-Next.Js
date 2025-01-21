function loopExamples() {
    // For Loop
    console.log("For Loop:");
    for (let i = 0; i < 3; i++) {
        console.log(`Iteration: ${i}`);
    }

    // While Loop
    console.log("\nWhile Loop:");
    let count = 0;
    while (count < 3) {
        console.log(`Iteration: ${count}`);
        count++;
    }

    // Do-While Loop
    console.log("\nDo-While Loop:");
    let doCount = 0;
    do {
        console.log(`Iteration: ${doCount}`);
        doCount++;
    } while (doCount < 3);

    // For-Of Loop
    console.log("\nFor-Of Loop:");
    const arr = ["A", "B", "C"];
    for (const item of arr) {
        console.log(`Item: ${item}`);
    }

    // For-In Loop
    console.log("\nFor-In Loop:");
    const obj = { a: 1, b: 2, c: 3 };
    for (const key in obj) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
}

loopExamples();
