let names: string[] = ["Oshani", "Kasun", "Nimal"];
let ages: number[] = [26, 30, 25];

console.log(names);
console.log(ages);

console.log("First name: " + names[0]);
console.log("Second name: " + names[1]);

for (let i = 0; i < names.length; i++) {
  console.log("Name: " + names[i]);
}
for (let age of ages) {
  console.log("Age: " + age);
}