// Simulating an API call with setTimeout
function fetchData(api, callback) {
    setTimeout(() => {
        console.log(`Fetching data from ${api}...`);
        callback(null, `Data from ${api}`);
    }, 1000);
}

// 1. Callback Hell Example
console.log("\n1. Callback Hell Example:");
fetchData("API1", (err, data1) => {
    console.log(data1);
    fetchData("API2", (err, data2) => {
        console.log(data2);
        fetchData("API3", (err, data3) => {
            console.log(data3);
            console.log("All APIs fetched using callbacks.");
        });
    });
});

// 2. Promises Example
console.log("\n2. Promises Example:");
function fetchDataWithPromise(api) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching data from ${api}...`);
            resolve(`Data from ${api}`);
        }, 1000);
    });
}

fetchDataWithPromise("API1")
    .then((data1) => {
        console.log(data1);
        return fetchDataWithPromise("API2");
    })
    .then((data2) => {
        console.log(data2);
        return fetchDataWithPromise("API3");
    })
    .then((data3) => {
        console.log(data3);
        console.log("All APIs fetched using promises.");
    })
    .catch((error) => console.error("Error:", error));

// 3. Async/Await Example
console.log("\n3. Async/Await Example:");
async function fetchAllData() {
    try {
        const data1 = await fetchDataWithPromise("API1");
        console.log(data1);
        const data2 = await fetchDataWithPromise("API2");
        console.log(data2);
        const data3 = await fetchDataWithPromise("API3");
        console.log(data3);
        console.log("All APIs fetched using async/await.");
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchAllData();

// 4. Mixing Promises and Async/Await
console.log("\n4. Mixing Promises and Async/Await:");
async function fetchMixed() {
    try {
        const data1 = await fetchDataWithPromise("API1");
        console.log(data1);

        // Using .then for API2
        fetchDataWithPromise("API2").then((data2) => {
            console.log(data2);
        });

        const data3 = await fetchDataWithPromise("API3");
        console.log(data3);

        console.log("All APIs fetched with mixed techniques.");
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchMixed();
