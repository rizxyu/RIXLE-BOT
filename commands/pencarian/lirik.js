const fetch = require("node-fetch")
module.exports = {
name: ["lirik"],
type: ["searching"],
description: "mencari lirik lagu",
utilisation: userbot.prefix + "lirik teks",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('mana judul lagu yg mau dicari liriknya?')
let res = await fetch(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${text}&apikey=Ikyy69`)

let json = await res.json()

m.reply(json.result)
}
}
