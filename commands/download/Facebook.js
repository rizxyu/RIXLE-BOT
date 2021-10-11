const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["facebook"],

type: ["download"],
useLimit: true,
description: "download video facebook",
utilisation: userbot.prefix + "facebook <link>",

async execute(m) {
let { conn, args } = data

let res = await fetch(`https://neoxr-api.herokuapp.com/api/download/fb?url=${args[0]}&apikey=yntkts`)
if (!res.ok) return m.reply('Ada kesalahan')
let json = await res.json()
  if (!json.status) return m.reply('waduh kena tembak ges')
  m.reply('⭕ sedang di proses')
  conn.sendFile(m.chat, json.data.sd.url, 'o.mp4', `*HD:* ${json.data.hd.url}\n\n*Ukuran:* ${json.data.hd.size}\n\nby @_Rizky`, null, m)
}
}