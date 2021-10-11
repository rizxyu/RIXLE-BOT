const fs = Ft.fs
let fetch = require('node-fetch')
let timeout = 120000
let poin = 500

module.exports = {

name: ["tebakkabupaten"],

type: ["game"],
useLimit: true,
description: "tebak kabupaten",
utilisation: userbot.prefix + "tebakkabupaten",

async execute(m) {
 let { conn } = data

  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
    let id = m.chat
    if (id in conn.tebakkabupaten) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
        throw false
    }
   let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
    if (!res.ok) throw eror
    let dot = await res.json()
    let json = dot[Math.floor(Math.random() * dot.length)]
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${userbot.prefix}tekb untuk bantuan
Bonus:  XP
`.trim()
  conn.tebakkabupaten[id] = [
        await conn.sendButImg(m.chat, await (await fetch(json.url)).buffer(), caption, 'FTBOT', 'Bantuan', '.teka', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkabupaten[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, 'FTBOT', 'Tebak Kabupaten', '.tebakkabupaten', conn.tebakkabupaten[id][0])
            delete conn.tebakkabupaten[id]
        }, timeout)
    ]
  }
}
