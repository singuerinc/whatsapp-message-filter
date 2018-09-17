#!/usr/bin/env node
var program = require('commander');
const fs = require("fs");

program
  .version('0.0.1')
  .option('-i, --input <i>', 'The file to parse')
  .option('-m, --message <m>', 'The message to search');

program.parse(process.argv);

const input = program.input;
    const message = program.message;
    const file = fs.readFileSync(input, "utf-8");
    const raw = file.split(/\n/);
    const parse = raw => /(\d+\/\d+\/\d+), (\d+:\d+) - (.+): (.*)/i.exec(raw);
    const toMsgObj = parsed => parsed ? { raw: parsed[0], date: parsed[1], time: parsed[2], user: parsed[3], message: parsed[4]} : { raw, date: "", time: "", user: "", message: ""};
    const has = x => x.indexOf(message) !== -1;
    const allMessages = raw.map(x => toMsgObj(parse(x)))
    const messagesWith = allMessages.filter(x => has(x.message));

    messagesWith.map(x => console.log(x.user, x.message));