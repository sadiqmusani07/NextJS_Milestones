#! /usr/bin/env node
"use strict";
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
        const minNumber = 1;
        const maxNumber = 100;
        const randomNumber = generateRandomNumber(minNumber, maxNumber);
        let attempts = 0;
        while (true) {
            const userInput = yield prompt({
                type: 'input',
                name: 'guess',
                message: 'Enter your guess (between 0 to 100):',
                validate: (input) => {
                    const num = parseInt(input);
                    if (isNaN(num)) {
                        return `The input ${num} is invalid, please enter a valid number.`;
                    }
                    else if (num < minNumber || num > maxNumber) {
                        return `Please enter a number between the range ${minNumber} and ${maxNumber}.`;
                    }
                    return true;
                }
            });
            attempts++;
            const guess = parseInt(userInput.guess);
            if (guess === randomNumber) {
                console.log(`Congratulations! You guessed the correct number "${randomNumber}" in ${attempts} attempts.`);
                break;
            }
            else if (guess < randomNumber) {
                console.log("Too low. Try again.");
            }
            else {
                console.log("Too high. Try again.");
            }
        }
    });
}
main();
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
