#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
const sleep = (ms: number = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();
    figlet(`CLI Calculator`, (err, data) => {
        console.log(
            ` ${gradient.pastel.multiline(data)} (Author: M. Zia Ur Rehman)`
        );
    });
}

await welcome();
