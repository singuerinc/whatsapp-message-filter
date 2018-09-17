#!/usr/bin/env node
var program = require("commander");
const what = require("./what");

program
  .version("0.0.1")
  .option("-i, --input <i>", "The file to parse")
  .option("-m, --message <m>", "The message to search");

program.parse(process.argv);

const input = program.input;
const message = program.message;

const fs = require("fs");

const file = input => fs.readFileSync(input, "utf-8");
const arr = what(file(input), message);

arr.forEach(x => console.log(x.date, x.user, x.message));
