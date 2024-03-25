#! /usr/bin/env node

import inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

prompt([
    { message: "first Operand:", type: "number", name: "firstOperand" }])