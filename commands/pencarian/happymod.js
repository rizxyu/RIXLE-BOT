let scrap = require("../../Lib/scrape")

module.exports = {
name: ["happymod"],
type: ["searching"],
description: "search application on happy mod",
utilisation: userbot.prefix+"happymod",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('lokasi')

const h = await scrap.happymod(text)
let capt = "*HAPPYMOD*\n\n"
for (let i = 0; i < h.length; i++) {
capt +=`*Nama:* ${h[i].name}\n*Link:* ${h[i].link}\n\n`
}
conn.sendFile(m.chat,h[0].icon,"m.png",capt,m)
}
}
