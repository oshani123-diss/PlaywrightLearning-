let browsers: string[] = ["Chrome", "Firefox", "Safari"];
let tests: string[] = ["Login test", "Search test", "Logout test"];

console.log(browsers);
console.log(tests);

for (let browser of browsers) {
  console.log("Browser: " + browser);
}

for (let test of tests) {
  console.log("Test: " + test);
}