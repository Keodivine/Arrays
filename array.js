
const data = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 34, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980];
const sortedLowToHigh = data.slice().sort();  // 1a
const sortedHighToLow = sortedLowToHigh.slice().reverse(); //1b slice prints the new array
const uniqueData = new Set(data); // 1c
const sumData = data.reduce(); //1d
const FData = data.filter(element => element <= 100); //1e
const greaterThan50 = data.filter(element => element > 50); //1f
const divisibleBy2 = data.filter(element => element % 2 === 0);   //1g % modulors checks if there is a remainder 
const divisibleBy3 = data.filter(element => element % 3 === 0); //1h
const notDivisibleBy2or3 = data.filter(element => element % 2 !== 0 && element % 3 !== 0); //i

//output
console.log("Sorted low to high:", sortedLowToHigh);
console.log("Sorted high to low:", sortedHighToLow);
console.log("Unique numbers:", [uniqueData]);
console.log("Sum of data:", sumData);
console.log("Element less than or equal to 100:", FData);
console.log("Elements greater than 50:", greaterThan50);
console.log("Elements divisible by 2:", divisibleBy2);
console.log("Elements divisible by 3:", divisibleBy3);
console.log("Elements not divisible by 2 or 3:", notDivisibleBy2or3.length ? notDivisibleBy2or3 : "[]");


