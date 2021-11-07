const fs = Ft.fs
const { servers, yta, ytv } = require("../../Lib/y2mate.js")
let yts = require('yt-search')
let fetch = require('node-fetch')

module.exports = {

name: ["play"],

type: ["download"],
useLimit: true,
description: "download audio dari youtube dengan text",
utilisation: userbot.prefix + "play <link>",

async execute(m) {
 let { conn, text } = data
if (!text) return m.reply('where text?')
let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  // m.quoted.delete()
m.reply('SEDANG DI PROSES')
await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*ＰＬＡＹ ＢＵＴＴＯＮ*
*Title:* ${title}
*Size Audio:* ${filesizeF}
*Size File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
`.trim(), userbot.packname , 'AUDIO', `audio ${vid.url}`, 'VIDEO', `video ${vid.url}`)
//conn.sendFile(m.chat, dl_link, `audio.mp3`, "hmm", m)
  }
}
