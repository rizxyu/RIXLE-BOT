const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["waifusfw"],

type: ["nsfw"],
useLimit: true,
description: "download video facebook",
utilisation: userbot.prefix + "waifusfw",

async execute(m) {
let { conn, args } = data

let res = await fetch(`https://api.waifu.pics/nsfw/waifu`)
if (!res.ok) return m.reply('Ada kesalahan')
let json = await res.json()

  m.reply('sedang di proses')
  conn.sendFile(m.chat, json.url, 'o.jpg', `Sange kok sama kartun`, null, m)
}
}
