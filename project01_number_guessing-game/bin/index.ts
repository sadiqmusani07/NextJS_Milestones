#! /usr/bin/env node

import inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

async function main() {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;

    while (true) {
        const userInput = await prompt({
            type: 'input',
            name: 'guess',
            message: 'Enter your guess (between 0 to 100):',
            validate: (input: string) => {
                const num = parseInt(input);
                if (isNaN(num)) {
                    return `The input ${num} is invalid, please enter a valid number.`;
                } else if (num < minNumber || num > maxNumber) {
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
        } else if (guess < randomNumber) {
            console.log("Too low. Try again.");
        } else {
            console.log("Too high. Try again.");
        }
    }
}

main();

function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}