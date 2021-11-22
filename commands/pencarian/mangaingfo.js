const fetch = require("node-fetch")
module.exports = {
name: ["mangainfo", "mangai"],
type: ["searching"],
description: "mencari manga",
utilisation: userbot.prefix + "manga (judul)",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply(`Masukkan Judul!`)
try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
  conn.sendFile(m.chat, image_url, null, mangaingfo, m, 0, { thumbnail: Buffer.alloc(0) })
} catch (e) {
m.reply(`Tidak dapat menemukan manga`)
}
}
}
