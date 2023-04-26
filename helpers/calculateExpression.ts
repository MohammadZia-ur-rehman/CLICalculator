import eOperation from "../enums/eOperation.js";
import Calculator from "../classes/Calculator.js";
import DivideByZero from "../exception/DivideByZero.js";

export async function calculateExpression(
    operand1: number,
    operand2: number,
    operation: eOperation
) {
    if (operation.toString() == eOperation[0]) {
        console.log(
            `The addition of ${operand1} & ${operand2} = ${Calculator.add(
                operand1,
                operand2
            )}`
        );
    } else if (operation.toString() == eOperation[1]) {
        console.log(
            `The subtraction of ${operand1} & ${operand2} = ${Calculator.subtract(
                operand1,
                operand2
            )}`
        );
    } else if (operation.toString() == eOperation[2]) {
        try {
            console.log(
                `The division of ${operand1} & ${operand2} = ${Calculator.divide(
                    operand1,
                    operand2
                )}`
            );
        } catch (e) {
            if (e instanceof DivideByZero)
                console.log(`Exception: ${e.message}`);
        }
    } else if (operation.toString() == eOperation[3]) {
        console.log(
            `The multiplication of ${operand1} & ${operand2} = ${Calculator.multiply(
                operand1,
                operand2
            )}`
        );
    } else if (operation.toString() == eOperation[4]) {
        console.log(
            `The power of ${operand1} & ${operand2} = ${Calculator.power(
                operand1,
                operand2
            )}`
        );
    } else if (operation.toString() == eOperation[5]) {
        console.log(
            `The modulus of ${operand1} & ${operand2} = ${Calculator.modulus(
                operand1,
                operand2
            )}`
        );
    } else {
        console.log(`${operation} is invalid`);
    }
}
