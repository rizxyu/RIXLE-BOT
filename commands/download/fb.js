
const { fbdl } = require('../../Lib/fbdl')

module.exports = {
name: ["fb"],
type: ["download"],
useLimit: true,
description: "download video from facebook url",
utilisation: userbot.prefix + "fb (url)",

async execute(m) {
let { conn, args } = data

try {
if (!args[0]) return m.reply('urlnya mana')
if (!args[0].includes("facebook")) return m.reply('url is wrong')
 const v = await fbdl(args[0])
 conn.sendFile(m.chat, v.hasil.link_high, 'fb.mp4', `\n*Berhasil Mendapatkan Video*\n\n⬇️Post by ${v.hasil.author}\n📖desk: ${v.hasil.title}`, m)
} catch (e) {
console.log('error Banh')
}
}
}
