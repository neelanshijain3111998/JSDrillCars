"use strict"; //User input using prompt-sync
const ps = require("prompt-sync");
const prompt = ps();
let ID = prompt("enter Car ID ");

const inventoryy = require("../inventoryRecord.js").inventory;
const pr1 = require("../problem1.js");
let x = pr1.publicTestcase(inventoryy, ID); //it return the data for that car.
console.log("Car " + x[0] + " is a " + x[1] + " " + x[2] + " " + x[3]); //On console it print car ID,year, make, and model
