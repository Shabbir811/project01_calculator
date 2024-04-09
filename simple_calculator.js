#! /usr/bin/env node
//first we import inquirer.
import inquirer from "inquirer";
import chalk from "chalk";
let list = ["+", "-", "x", "/", "power X^n", "remainder", "%"];
// we let input from user through inquirer 
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
        choices: list
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
//perform some calcultions
let sum = num1 + num2;
let minus = num1 - num2;
let multiple = num1 * num2;
let divide = num1 / num2;
let power1 = num1 ** num2;
let remainder1 = num1 % num2;
let percentage1 = (num2 / num1) * 100;
let percentage2 = (num1 / num2) * 100;
//use some if else conditions to create logic for code
if (result.includes(list[0])) {
    console.log(chalk.blue.bgBlack `your answer is${sum}`);
}
else if (result.includes(list[1])) {
    console.log(chalk.red.bgBlack `your answer is${minus}`);
}
else if (result.includes(list[2])) {
    console.log(chalk.yellow.bgBlack `your answer is${multiple}`);
}
else if (result.includes(list[3])) {
    console.log(chalk.green.bgBlack `your answer is${divide}`);
}
else if (result.includes(list[5])) {
    console.log(chalk.cyan.bgBlack `your answer is${power1}`);
}
else if (result.includes(list[4])) {
    console.log(chalk.rgb(80, 130, 220).bgBlack `your remainder is${remainder1}`);
}
else if (result.includes(list[6])) {
    if (num1 > num2) {
        console.log(chalk.redBright.bgBlack `your percentage is${percentage1}`);
    }
    else {
        console.log(chalk.redBright.bgBlack `your percentage is${percentage2}`);
    }
}
