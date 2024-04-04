#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; // dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if ((pinAnswer.pin = myPin)) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkBalance", "fastBalance"],
        },
    ]);
    console.log("operationAns");
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your ammount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insuficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is :" + myBalance);
        }
    }
    else if (operationAns.operation === "checkBalance") {
        console.log("your balance is :" + myBalance);
    }
    else if (operationAns.operation === "fastBalance") {
        let balanceAns = await inquirer.prompt([
            {
                name: "balance",
                message: "select your balance",
                type: "list",
                choices: ["10000", "20000", "30000", "40000"],
            },
        ]);
        myBalance -= balanceAns.balance;
        console.log("your remaining balance is :" + myBalance);
    }
}
else
    console.log("incorrect pin number");
