const api = require('kotz-api')

module.exports = {
name: ["linkwa"],
type: ["searching"],
description: "mencari Link Group Wa",
utilisation: userbot.prefix + "linkwa gabut",


async execute(m){
let { conn, text } = data
if (!text) return m.reply('cari apa?')

const gc = await api.linkwa(text)
let gcwa = "*GROUP WHATSAPP*\n\n"
for (let i = 0; i < gc.length; i++) {
gcwa += `*Nama* : *${gc[i].nama}\n`
gcwa += `*Link* : ${gc[i].link}\n\n`
}
conn.sendMessage(m.chat, gcwa, mediaType.text, { quoted: m, contextInfo: { forwardingScore: 508, isForwarded: true }})
}}