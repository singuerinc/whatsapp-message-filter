const raw = file => file.split(/\n/);
const parseRaw = raw => /(\d+\/\d+\/\d+), (\d+:\d+) - (.+): (.*)/i.exec(raw);
const toMsgObj = parsed =>
  parsed
    ? {
        raw: parsed[0],
        date: parsed[1],
        time: parsed[2],
        user: parsed[3],
        message: parsed[4]
      }
    : { raw, date: "", time: "", user: "", message: "" };
const has = (x, txt) => x.indexOf(txt) !== -1;
const allMessages = f => raw(f).map(x => toMsgObj(parseRaw(x)));
const messagesWith = (list, text) => list.filter(x => has(x.message, text));

const parse = (input, message) => {
  const all = allMessages(input);
  return messagesWith(all, message);
};

module.exports = parse;
