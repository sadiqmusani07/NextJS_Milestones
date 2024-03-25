#! /usr/bin/env node

//import inquirer from "inquirer";
import inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

async function main() {
  const userInput = await prompt([
    { message: "first Operand:", type: "number", name: "firstOperand" },
    { message: "second Operand:", type: "number", name: "secondOperand" },
    {
      message: "Select operator to perform action:",
      type: "list",
      name: "operator",
      choices: ["+", "-", "*", "/"],
    },
  ]);

  switch (userInput.operator) {
    case "+": //Addition
      console.log(
        `The addition of ${userInput.firstOperand} and ${
          userInput.secondOperand
        } is: ${userInput.firstOperand + userInput.secondOperand}`
      );
      break;
    case "-": //Subtraction
      console.log(
        `The subtraction from ${userInput.firstOperand} of ${
          userInput.secondOperand
        } is: ${userInput.firstOperand + userInput.secondOperand}`
      );
      break;
    case "*": //Multiplication
      console.log(
        `The multiplication of ${userInput.firstOperand} into ${
          userInput.secondOperand
        } is: ${userInput.firstOperand + userInput.secondOperand}`
      );
      break;
    case "/": //Division
      if (userInput.secondOperand === 0) {
        console.log("Sorry!! division by zero is not allowed.");
      } else {
        console.log(
          `${userInput.firstOperand} divided by ${
            userInput.secondOperand
          } is equal to: ${userInput.firstOperand / userInput.secondOperand}`
        );
      }
      break;
    default:
      console.log(
        `Invalid Operator ${userInput.operator} selected cannot perform any action on ${userInput.firstOperand} and ${userInput.secondOperand}`
      );
  }
}

main().catch((error) => console.error(error));
