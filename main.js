#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = 0;
let amount = await inquirer.prompt([
    {
        name: "user",
        type: "number",
        message: "Enter the amount in number:",
    },
]);
let amountCurrency = await inquirer.prompt([
    {
        name: "user",
        type: "list",
        message: "Enter the currency of your amount:",
        choices: ["USD", "AED", "PKR"],
    },
]);
let desiredCurrency = await inquirer.prompt([
    {
        name: "user",
        type: "list",
        message: "Enter the desired currency:",
        choices: ["USD", "AED", "PKR"],
    },
]);
if (amountCurrency.user === desiredCurrency.user) {
    console.log(`Please input different currencies for conversion.`);
}
else if (amountCurrency.user === "USD" && desiredCurrency.user === "AED") {
    conversion = amount.user * 3.67;
    console.log(`The conversion is: ${conversion} AED.`);
}
else if (amountCurrency.user === "USD" && desiredCurrency.user === "PKR") {
    conversion = amount.user * 278.60;
    console.log(`The conversion is: ${conversion} PKR.`);
}
else if (amountCurrency.user === "AED" && desiredCurrency.user === "USD") {
    conversion = amount.user / 3.67;
    console.log(`The conversion is: ${conversion} $.`);
}
else if (amountCurrency.user === "AED" && desiredCurrency.user === "PKR") {
    conversion = amount.user * 75.85;
    console.log(`The conversion is: ${conversion} PKR.`);
}
else if (amountCurrency.user === "PKR" && desiredCurrency.user === "USD") {
    conversion = amount.user / 278.60;
    console.log(`The conversion is: ${conversion} $.`);
}
else if (amountCurrency.user === "PKR" && desiredCurrency.user === "AED") {
    conversion = amount.user * 0.013;
    console.log(`The conversion is: ${conversion} AED.`);
}
