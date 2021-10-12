let fetch = require("node-fetch")

module.exports = {
name: ["kisahnabi"],
type: ["Islami"],
useLimit: true,
description: "mencari kisah nabi",
utilisation: userbot.prefix + "kisahnabi (namanabi)",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('nama nabi?')
let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/kisahnabi?nabi=${text}&apikey=Alphabot`)
json = await res.json()
if (!json.result) return m.reply('eror')
conn.sendFile( m.chat, json.result.nabi.image, 'kisahnabi.jpg', `*KISAH NABI*\n*${json.result.nabi.nabi}*\n===============\n\n*lahir:* ${json.result.nabi.lahir} \n*Umur:* ${json.result.nabi.umur}\n*Tempat Kelahiran:* ${json.result.nabi.tempat}\n*📑Kisah:* ${json.result.nabi.kisah}\n`, m)

}
}
