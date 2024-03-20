#! /usr/bin/env node
//first we import inquirer.
import inquirer from "inquirer";
import chalk from "chalk";
// we let input from user throuth inquirer 
const answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter first number",
    },
    {
        name: "opration",
        type: "list",
        message: "select your oprations",
        choices: ["+", "-", "x", "/", "%", "power X^n", "remainder"]
    },
    {
        name: "num2",
        type: "number",
        message: "enter second number"
    }
]);
// let store some inquirer values in seprate variables
let result = (answer.opration);
let num1 = answer.num1;
let num2 = answer.num2;
//use some if else conditions to create logic for code
if (result === "+") {
    console.log(chalk.blue.bgBlack `your answer is${num1 + num2}`);
}
else if (result === "-") {
    console.log(chalk.red.bgBlack `your answer is${num1 - num2}`);
}
else if (result === "x") {
    console.log(chalk.yellow.bgBlack `your answer is${num1 * num2}`);
}
else if (result === "/") {
    console.log(chalk.green.bgBlack `your answer is${num1 / num2}`);
}
else if (result === "power X^n") {
    console.log(chalk.cyan.bgBlack `your answer is${num1 ** num2}`);
}
else if (result === "remainder") {
    console.log(chalk.rgb(80, 130, 220).bgBlack `your remainder is${num1 % num2}`);
}
else if (result === "%") {
    if (num1 > num2) {
        console.log(chalk.redBright.bgBlack `your percentage is${(num2 / num1) * 100}`);
    }
    else {
        console.log(chalk.redBright.bgBlack `your percentage is${(num1 / num2) * 100}`);
    }
}
