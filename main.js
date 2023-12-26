function fibTs(n) {
    if (n < 1) {
        return 0;
    }
    else if (n <= 2) {
        return 1;
    }
    var a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
        var rtmp = a + b;
        a = b;
        b = rtmp;
    }
    return b;
}
var startTimeTs = Date.now();
fibTs(10000);
console.log("Runtime: " + (Date.now() - startTimeTs) + " ms");
for (const [key, value] of Object.entries(process.memoryUsage())) {
    console.log(`Memory usage by ${key}, ${value / 1000000}MB `)
}
