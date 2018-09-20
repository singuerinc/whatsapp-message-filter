[![Codacy grade](https://img.shields.io/codacy/grade/fe4450e813b64cf48009408023bf2ac5.svg?style=flat-square)](https://www.codacy.com/app/nahuel.scotti/whatsapp-message-filter)
[![CircleCI](https://img.shields.io/circleci/project/github/singuerinc/whatsapp-message-filter/master.svg?style=flat-square)](https://circleci.com/gh/singuerinc/whatsapp-message-filter)
[![Codecov](https://img.shields.io/codecov/c/github/singuerinc/whatsapp-message-filter.svg?style=flat-square)](https://codecov.io/gh/singuerinc/whatsapp-message-filter)

# WhatsApp message filter

Filter a chat history file

# Usage

1. Download a whatsapp file history. Follow this guide: https://faq.whatsapp.com/en/android/23756533/
2. Execute the program:

## Globally

```bash
# npm
npm install -g whatsapp-message-filter
whatsapp-message-filter --input ./file.txt --message "great!"

# npx
npx whatsapp-message-filter --input ./file.txt --message "great!"

# yarn
yarn global add whatsapp-message-filter
npx whatsapp-message-filter --input ./file.txt --message "great!"
```

## Module

```bash
# npm
npm install whatsapp-message-filter

# or yarn
yarn add whatsapp-message-filter
```

```js
const fs = require("fs");
const what = require("whatsapp-message-filter");
const file = fs.readFileSync("./file.txt", "utf-8");
const arr = what(file, "message");

// [{
//   raw: string,
//   date: string,
//   time: string,
//   user: string,
//   message: string
// }, ...]
```
