const readline = require("readline-sync")


let num1 = parseInt(question("Please enter your first number: "))

let num2 = parseInt(question("Please enter your second number: "))

let operation = question("Please enter the operation to perform + - * /: ")

if (operation === "+") {
    console.log(num1 + num2)
}

if (operation === "-") {
    console.log(num1 - num2)
}

if (operation === "*") {
    console.log(num1 * num2)
}

if (operation === "/") {
    console.log(num1 / num2)
}