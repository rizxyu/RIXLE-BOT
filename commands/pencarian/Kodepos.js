let scrap = require("../../Lib/scrape")

module.exports = {
name: ["kodepos"],
type: ["searching"],
description: "search kodepos",
utilisation: userbot.prefix+"kodepos",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('lokasi')

var s = await scrap.kodepos(text)
let capt = "*KODEPOS SEARCH*\n\n"
for (let i = 0; i < s.length; i++) {
capt +=`*Provinsi:* ${s[i].province}\n*Kota:* ${s[i].city}\n*kecamatan:* ${s[i].subdistrict}\n*perkotaan:* ${s[i].urban}\n*kode:* ${s[i].postalcode}\n\n`
}
m.reply(capt)
}
}
