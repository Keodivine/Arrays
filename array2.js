
const myArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];

//1a
let numbers = [];
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    numbers.push(myArray[i]);
  }
}
console.log("Numbers:", numbers); 

//1b
let strings = [];
let j = 0;
while (j < myArray.length) {
  if (typeof myArray[j] === "string") {
    strings.push(myArray[j]);
  }
  j++;
}
console.log("Strings:", strings);

let sum = 0;
let k = 0;
do {
  if (typeof myArray[k] === "number") {
    sum += myArray[k];
  }
  k++;
} while (k < myArray.length);
console.log("Sum:", sum);


let greeting = "Hello, ";
for (let i = 0; i < strings.length; i++) {
  greeting += strings[i];
  if (i < strings.length - 2) {
    greeting += ", ";
  } else if (i === strings.length - 2) {
    greeting += " and ";
  }
}
greeting += ".";
console.log("Greeting:", greeting);


const newArray = myArray.filter((item) => typeof item !== "string");
console.log("Array without strings:", newArray);


