const { servers, yta, ytv } = require('../../Lib/y2mate')
const fetch = require('node-fetch')
const { tiktok } = require("../../Lib/scrape.js")
const { fbdl } = require('../../Lib/fbdl')

module.exports = { 
name: "autodownlaod", 
async functions(m) {
let { conn } = data

   if (/^https?:\/\/.*youtu/i.test(m.text)) {
  let server = (m.text || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(m.text, servers.includes(server) ? server : servers[0])
  let isLimit = (limit) * 1024 < filesize  
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'compressing...')
  conn.sendFile(m.chat, dl_link, title + '.mp3', null, m)
}
    if (/^https?:\/\/.*vt/i.test(m.text)) {
     let ttdata = await tiktok(m.text)
     conn.sendMessage(m.chat, await (await Ft.fetch(ttdata.result.nowm)).buffer(),"videoMessage",{quoted:m})
   }   
    if (/^https?:\/\/.*facebook/i.test(m.text)) {
     const v = await fbdl(m.text)
     conn.sendFile(m.chat, v.hasil.link_high, 'fb.mp4', `\n*Berhasil Mendapatkan Video*\n\n⬇️Post by ${v.hasil.author}\n📖desk: ${v.hasil.title}`, m)
   }
    if (/^https?:\/\/.*twitter/i.test(m.text)) {
    var res = await fetch(`https://rizapi.herokuapp.com/api/twitter?url=${m.text}`)
    let json = await res.json()
    conn.send3Button(m.chat,`*Twitter Downloader*\n Pilih type dibawah`, userbot.prefix, `HD`, `thd ${m.text}`, `SD`, `tsd ${m.text}`, `AUDIO`, `taudio ${m.text}`, m)
   }
    if (/^https?:\/\/.*instagram/i.test(m.text)) {
   let { igvideo, igfoto } = require("../../Lib/scrape")
   await igvideo(m.text).then(res => {
   conn.sendFile(m.chat, res.link, null, null, m)
   })
   }
}
}
//Madeby Rizxyu
