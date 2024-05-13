let score = "aaditya";  // 20, "59jns", null, undefined, true, false, "aaditya"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)   // Number converts string to number...
//console.log(valueInNumber);   // NaN 
//console.log(typeof valueInNumber); // type of NaN is number...

// "40" => 40
// "40abc" => NaN
// true => 1; false => 0

let isLoggedIn = "   ";

let loggedIn = Boolean(isLoggedIn);
console.log(loggedIn);

// 1 => true; 0 => false
// "" => false, "aaditya" => true

let someNumber = 23

let stringNumber = String(someNumber)

console.log(stringNumber);  // 23
console.log(typeof stringNumber); // string