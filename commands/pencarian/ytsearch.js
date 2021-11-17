const fs = Ft.fs
let yts = require('yt-search')
let fetch = require('node-fetch')

module.exports = {

name: ["ytsearch"],
type: ["searching"],
description: "Download and searching music dri YouTube",
utilisation: userbot.prefix + "ytsearch <query>",

async execute(m) {

let { conn, text } = data

try {
if (!text) return m.reply('Mau Cari Apa?')
let results = await yts(text)
let result = results.all
if (!result) throw 'Pencarian Anda Tidak di Temukan'
let berhitung = 1
let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${text} *\n\n─────────────────\n\nKetik ${userbot.prefix}getmusic [ Angka ] untuk mengambil ID, Contoh : ${userbot.prefix}getmusic 2\n`

for (let i = 0; i < result.length; i++) {
 xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].author.name}\n*Durasi* : ${result[i].timestamp}\n*Perintah download* : \n*${prefix}getmusic ${result[i].videoId}*\n`
                    }
  xixixi += `\n\n`
 for (let ii = 0; ii < result.length; ii++) {
 xixixi += `(#)${result[ii].videoId}`
                }
conn.sendMessage(m.chat,await (await Ft.fetch(result[0].thumbnail)).buffer(),"imageMessage",{quoted:m, caption: xixixi, thumbnail:Buffer.alloc(0)})
} catch (e) {
console.log("eror")
  }
}
}
