module.exports = {
name: ["setlog"],
type: ["owner"],
owner: true,
description: "set changelog",
utilisation: userbot.prefix + "setlog",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('apa yg baru')

userbot.chalog = text

m.reply('Sukses Menambahkan changelog')
}
}
