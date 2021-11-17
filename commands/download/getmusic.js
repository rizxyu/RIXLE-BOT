const fs = Ft.fs
let limit = 30
const { servers, yta, ytv } = require("../../Lib/y2mate.js")
let yts = require('yt-search')
let fetch = require('node-fetch')

module.exports = {

name: ["getmusic"],
type: ["download"],
useLimit: true,
description: "Download and searching music dri YouTube",
utilisation: userbot.prefix + "getmusic <query>",

async execute(m) {
  
let { conn, args, caption } = data
if (!m.quoted) return m.reply('Tolong Reply Chat Bot')
if (!args[0]) return m.reply("id or angka?")
let hasilSplit = m.quoted.caption.split("(#)")[`${args[0]}`]
let hasil = ("https://youtu.be/" + hasilSplit)
let server = (hasil || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(hasil, servers.includes(server) ? server : servers[0])
  let isLimit = (limit) * 1024 < filesize  
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'compressing...')
  conn.sendButtonLoc(m.chat, await (await fetch (thumb)).buffer(), `
  *ＹＴＭＰ3 ＹＯＵＴＵＢＥ*
  *Title:* ${title}
  *Size:* ${filesizeF}
   _AUDIO SEDANG DIPROSES_`, userbot.packname, 'VIDEO', `video ${args[0]}`, m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + ".mp3", null, m)
}
}
