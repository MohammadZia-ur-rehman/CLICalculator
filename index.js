#!/usr/bin/env node
import figlet from "figlet";
import gradient from "gradient-string";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    console.clear();
    figlet(`CLI Calculator`, (err, data) => {
        console.log(
            ` ${gradient.pastel.multiline(data)} Author: M. Zia Ur Rehman!`
        );
    });
}
await welcome();
