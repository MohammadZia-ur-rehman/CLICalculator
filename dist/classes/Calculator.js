import DivideByZero from "../exception/DivideByZero.js";
class Calculator {
    static add(operand1, operand2) {
        return operand1 + operand2;
    }
    static subtract(operand1, operand2) {
        return operand1 - operand2;
    }
    static divide(operand1, operand2) {
        if (operand2 === 0) {
            throw new DivideByZero("Divide by zero operation not allowed");
        }
        return operand1 / operand2;
    }
    static multiply(operand1, operand2) {
        return operand1 * operand2;
    }
    static power(operand1, operand2) {
        return operand1 ** operand2;
    }
    static modulus(operand1, operand2) {
        return operand1 % operand2;
    }
}
export default Calculator;
