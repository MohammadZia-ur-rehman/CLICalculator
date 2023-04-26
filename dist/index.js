#!/usr/bin/env node
import welcome from "./helpers/welcome.js";
import { input, chooseOperation, askUserToContinue } from "./helpers/prompt.js";
import { calculateExpression } from "./helpers/calculateExpression.js";
let continueOperation = true;
do {
    await welcome();
    let operand1;
    let operand2;
    let invalidInput = false;
    do {
        if (invalidInput)
            console.log("Invalid input, kindly enter numeric value for numbers");
        operand1 = (await input("operand1", "number", "Enter first number:"))
            .operand1;
        operand2 = (await input("operand2", "number", "Enter second number:"))
            .operand2;
        if (Number.isNaN(operand1) || Number.isNaN(operand2)) {
            invalidInput = true;
        }
        else {
            invalidInput = false;
        }
    } while (invalidInput);
    let operation = (await chooseOperation()).operation;
    await calculateExpression(operand1, operand2, operation);
    continueOperation =
        (await askUserToContinue()).continueOperation == "YES" ? true : false;
} while (continueOperation);
