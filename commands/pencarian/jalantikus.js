let scrap = require("../../Lib/scrape")

module.exports = {
name: ["jalantikus"],
type: ["searching"],
description: "mencari berita atau info di jalan tikus",
utilisation: userbot.prefix+"jalantikus",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('cari apa?')

const j = await scrap.jalantikus(text)
let capt = "*JALANTIKUS*\n\n"
for (let i = 0; i < j.length; i++) {
capt +=`*Title:* ${j[i].title}\n*Category:* ${j[i].category}\n*Date:* ${j[i].date}\n*Link:* ${j[i].link}\n\n`
}
m.reply(capt)
}
}
