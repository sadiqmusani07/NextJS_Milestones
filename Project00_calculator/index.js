"use strict";
//import inquirer from "inquirer";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userInput = yield prompt([
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
                console.log(`The addition of ${userInput.firstOperand} and ${userInput.secondOperand} is: ${userInput.firstOperand + userInput.secondOperand}`);
                break;
            case "-": //Subtraction
                console.log(`The subtraction from ${userInput.firstOperand} of ${userInput.secondOperand} is: ${userInput.firstOperand + userInput.secondOperand}`);
                break;
            case "*": //Multiplication
                console.log(`The multiplication of ${userInput.firstOperand} into ${userInput.secondOperand} is: ${userInput.firstOperand + userInput.secondOperand}`);
                break;
            case "/": //Division
                if (userInput.secondOperand === 0) {
                    console.log("Sorry!! division by zero is not allowed.");
                }
                else {
                    console.log(`${userInput.firstOperand} divided by ${userInput.secondOperand} is equal to: ${userInput.firstOperand / userInput.secondOperand}`);
                }
                break;
            default:
                console.log(`Invalid Operator ${userInput.operator} selected cannot perform any action on ${userInput.firstOperand} and ${userInput.secondOperand}`);
        }
    });
}
main().catch((error) => console.error(error));
