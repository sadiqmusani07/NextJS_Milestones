#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
prompt([
    { message: "first Operand:", type: "number", name: "firstOperand" }
]);
