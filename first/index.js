// let user = prompt("What is your name")

// alert("Hello! " + user);

// let color = prompt("What is your favourite color");
// alert(`${user} is amazing and ${color} is my favourite color`);

// const hello = function() {
//   alert("Hello! ");
// };

// const user  = function() {
//   let userName = prompt("What is your name?")
// }

// const age = function() {
//   let number = prompt("How old are you?");
//   alert(`User is ${number} years old`)
// }

// age();


// const userName = function() {
//   let user = prompt("What is your name?")
//   hello(user);
// }

// const hello = function(user) {
//   alert(`Hello ${user}`)
// }

// userName();

// const age = function() {
//   let number = prompt("How old are you?");
//   message(number);

// }

// const message = function(number) {
//   alert(`You are ${number} years old`)
// };

// age();

// const calcAge = function() {
//   let age = prompt("How old are you?");
//   alert(`Your age is ${age * 12} in months`)
// }

// calcAge();

// const calcSalary = function() {
//   let salaryPerWeek = prompt("What is your salary?");
//   let salaryPerDay = salaryPerWeek / 5;
//   alert(`Your salary per week is ${salaryPerWeek}$ and ${salaryPerDay}$ per day!`)
// };

// calcSalary();


// const favouriteFruit = function() {
//   let fruit = prompt(`What is your favourite fruit?`).toLowerCase();

//   if (fruit === "grape") {
//     alert(`A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes, used for making wine, jam, grape juice, jelly, grape seed extract, vinegar, and grape seed oil, or dried as raisins, currants and sultanas.`)
//   } else if (fruit === "peach") {
//     alert(`The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated. `)
//   } else if (fruit === "plum") {
//     alert(`A plum is a fruit of some species in Prunus subg. Prunus.`)
//   } else if (fruit === "cherry") {
//     alert(`A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe.`)
//   } else {
//     alert(`No idea what is that!`)
//   }
// };

// favouriteFruit();

// const tinder = function() {
//   let age = prompt(`How old are you?`).toLowerCase();
//   let maritalStatus = prompt(`Are you married?`).toLowerCase();
//   let salary = prompt(`What is your income?`).toLowerCase();
//   let job = prompt(`Are you a developer?`).toLowerCase();

//   if (age >= 18 && maritalStatus === "no" && salary > 400000 && (job === 'react' || job === 'js')) {
//     alert(`Welcome!`);
//   } else {
//     alert(`Sorry, not today!`);
//   }
// }

// tinder();

// const timeSet = function() {
//   let time = 23;

//   if (time > 9 && time < 12) {
//     alert(`Good morning!`)
//   } else if (time >= 12 && time < 17) {
//     alert(`Good day!`)
//   } else if (time >= 17 && time < 20) {
//     alert(`Good evening!`)
//   } else {
//     alert(`Good night!`)
//   }
// }
// timeSet();

// let statusUser = "nnn";

// switch (statusUser) {
//   case 'admin':
//     alert(`Hello, ADMIN!`);
//     break;
//   case 'user':
//     alert(`Hello User!`);
//     break;
//   default:
//     alert(`Who are you?`);
//     break;
// }

// let points = 10001;
// let client = points > 10000 ? "Golden client" : "Silver client";

// alert(client);

// let apples = 5;
// let amount = apples < 6 ? "You do not have enough apples" : "Bake it!";

// alert(amount);

// let question = prompt(`Would you like to earn more?`).toLowerCase();
// let answer = question === 'yes' ? "Go to work!" : "You are lazy asshole!";
// alert(answer);

let iLoveHTML = "I love HTML";
alert(iLoveHTML.replace("love", "hate"));

