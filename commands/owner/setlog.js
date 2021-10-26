const changelog = require('../../changelog.json')

module.exports = {
name: ["setlog"],
type: ["owner"],
owner: true,
description: "set changelog",
utilisation: userbot.prefix + "setlog",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('apa yg baru')

changelog.changelog += "\n\n" + text + "\n"

m.reply('Sukses Menambahkan changelog')
}
}
