let fetch = require("node-fetch")

module.exports = {
name: ["jsholat"],
type: ["Islami"],
useLimit: true,
description: "jadwal sholat",
utilisation: userbot.prefix + "jsholat [Kota]",

async execute(m) {
let { conn, text } = data

let res = await fetch(`https://api.zeks.me/api/jadwalsholat?apikey=apivinz&daerah=${text}`)
let json = await res.json()

//if (json.status) return m.reply(`${json.listdaerah}`)
let cp = `
${json.data.string}

Source: ${json.source}
`
m.reply(cp)
}
}
