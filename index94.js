// Function that returns a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                resolve({ data: "Sample Data" });
            } else {
                reject("Invalid URL");
            }
        }, 1000);
    });
}

// Promise Chaining
console.log("Using Promise Chaining:");
fetchData("https://api.example.com/data")
    .then(response => {
        console.log("First Response:", response.data);
        return fetchData("https://api.example.com/data");
    })
    .then(response => {
        console.log("Second Response:", response.data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Async/Await
console.log("\nUsing Async/Await:");
async function fetchWithAsyncAwait() {
    try {
        const firstResponse = await fetchData("https://api.example.com/data");
        console.log("First Response:", firstResponse.data);

        const secondResponse = await fetchData("https://api.example.com/data");
        console.log("Second Response:", secondResponse.data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchWithAsyncAwait();
