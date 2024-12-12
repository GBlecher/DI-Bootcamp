import chalk from "chalk";
let variable = 'This Is bold, underlined and red'

export function displayClrMessage(variable){
console.log(chalk.red.bold.underline(variable));
}