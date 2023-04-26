import inquirer from "inquirer";
import eOperation from "../enums/eOperation.js";

async function input(name: string, type: string, message: string) {
    return await inquirer.prompt([
        {
            name: name,
            type: type,
            message: message,
        },
    ]);
}

async function chooseOperation() {
    return await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select Operation:",
            choices: [
                eOperation[0],
                eOperation[1],
                eOperation[2],
                eOperation[3],
                eOperation[4],
                eOperation[5],
            ],
        },
    ]);
}

async function askUserToContinue() {
    return await inquirer.prompt([
        {
            name: "continueOperation",
            type: "list",
            message: "Do you want to continue:",
            choices: ["YES", "NO"],
        },
    ]);
}

export { input, chooseOperation, askUserToContinue };
