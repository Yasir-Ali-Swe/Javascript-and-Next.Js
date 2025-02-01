// Callback Hell Example
function fetchData(url, callback) {
    setTimeout(() => {
        callback(null, `Data from ${url}`);
    }, 2000);
}

fetchData("url1", (err, data1) => {
    console.log(data1);
    fetchData("url2", (err, data2) => {
        console.log(data2);
        fetchData("url3", (err, data3) => {
            console.log(data3);
        });
    });
});

// Solution using Promises
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 2000);
    });
}

fetchDataPromise("url1")
    .then(data1 => {
        console.log(data1);
        return fetchDataPromise("url2");
    })
    .then(data2 => {
        console.log(data2);
        return fetchDataPromise("url3");
    })
    .then(data3 => {
        console.log(data3);
    });
