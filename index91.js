function controlFlowExample(num) {
    // If-Else
    if (num > 10) {
        console.log("The number is greater than 10");
    } else if (num === 10) {
        console.log("The number is exactly 10");
    } else {
        console.log("The number is less than 10");
    }

    // Switch
    switch (num) {
        case 5:
            console.log("The number is 5");
            break;
        case 10:
            console.log("The number is 10");
            break;
        default:
            console.log("The number is neither 5 nor 10");
    }

    // For Loop
    for (let i = 0; i < 3; i++) {
        console.log(`For loop iteration: ${i}`);
    }

    // While Loop
    let count = 0;
    while (count < 3) {
        console.log(`While loop count: ${count}`);
        count++;
    }

    // Do-While Loop
    let doCount = 0;
    do {
        console.log(`Do-while loop count: ${doCount}`);
        doCount++;
    } while (doCount < 3);
}

controlFlowExample(10);
