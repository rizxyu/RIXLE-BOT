let fetch = require("node-fetch")

module.exports = {
name: ["surah"],
type: ["Islami"],
useLimit: true,
description: "mencari surah dengan nomer",
utilisation: userbot.prefix + "surah nomer",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply( userbot.prefix + "surah 1")
let res = await fetch(`https://api.zeks.me/api/quran?apikey=apivinz&no=${text}`)

let json = await res.json()

m.reply(`
${json.surah}

${json.jumlah_ayat}
${json.ket}
${json.type}
${json.audio}`)

conn.sendFile(m.chat, json.audio, 'surah.mp3', '', null, m)
  }
}
