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

const calcAge = function() {
  let age = prompt("How old are you?");
  alert(`Your age is ${age * 12} in months`)
}

calcAge();

const calcSalary = function() {
  let salaryPerWeek = prompt("What is your salary?");
  let salaryPerDay = salaryPerWeek / 5;
  alert(`Your salary per week is ${salaryPerWeek}$ and ${salaryPerDay}$ per day!`)
};

calcSalary();
