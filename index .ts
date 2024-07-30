#! /usr/bin/env node
import { input, number, select } from "@inquirer/prompts";
async function calculator() {
  console.log(
    "Thank you for using this,This is a simple calculator so only two values of infinite digits can be either add  subtract or multiply divide with eachother. "
  );
  const num1 = await number({
    message: "Enter you first number",
    required: true,
  });
  const num2 = await number({
    message: "Enter your second number",
    required: true,
  });
  if (num1 === undefined || num2 === undefined) {
    console.error("Both numbers are required");
    return;
  }
  const option = await select({
    message: "Below are the operators, Select one to perform an action.",
    choices: [
      {
        name: "+",
        value: "Addition",
        description: "This is called Addition operator, used to add values",
      },
      {
        name: "-",
        value: "Subtraction",
        description:
          "This is called Subtraction operator, used to subtract values",
      },
      {
        name: "*",
        value: "Multiplication",
        description:
          "This is called Multiplication operator, used to multiply values",
      },
      {
        name: "/",
        value: "Divide",
        description: "This is called division operator, used to divide values",
      },
    ],
  });
  if (option === "Addition") {
    const add = num1 + num2;
    console.log(`The addition of these values is = ${add}`);
  } else if (option === "Subtraction") {
    const sub = num1 - num2;
    console.log(`The subtraction of these values is = ${sub}`);
  } else if (option === "Multiplication") {
    const mul = num1 * num2;
    console.log(`The multiplication of these values is = ${mul}`);
  } else if (option === "Divide") {
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      const divide = num1 / num2;
      console.log(`The division of these values is = ${divide}`);
    }
  }
}
calculator();