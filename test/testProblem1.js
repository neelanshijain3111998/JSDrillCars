"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let ID = prompt("enter ID");

const inventoryy = require("../inventoryRecord.js").inventory;
const pr1 = require("../problem1.js");
let x = pr1.publicTestcase(inventoryy, ID);
console.log("Car " + x[0] + " is a " + x[1] + " " + x[2] + " " + x[3]);
