const package = require('../../package.json')

module.exports = {
name: ["changelog"],
type: ["default"],
description: "changelog bot",
utilisation: userbot.prefix + "changelog",

async execute(m) {
let { conn, text } = data

m.reply(`${userbot.chalog}

```${package.name} ${package.version}```
*${package.description}*
`)

}
}
