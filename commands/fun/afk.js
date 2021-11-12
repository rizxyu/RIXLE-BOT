let fs = require('fs')

module.exports = {
name: ["afk"],
type: ["fun"],
description: "afk",
utilisation: userbot.prefix + "afk <alasan>",

async execute(m) {
let { conn, text } = data

const json = JSON.parse(fs.readFileSync('./db/afk.json'))

json.push(m.sender, text,+ new Date)
fs.writeFileSync('./db/afk.json', JSON.stringify(json))
m.reply(`${conn.getName(m.sender)} sekarang afk dengan alasan ${text}`)
}
}
//:V
