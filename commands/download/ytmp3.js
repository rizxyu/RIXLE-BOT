const fs = Ft.fs
let limit = 30
const { servers, yta } = require('../../Lib/y2mate')
const fetch = require('node-fetch')
module.exports = {
name: ["ytmp3"],
type: ["download"],
useLimit: true,
description: "download audio from youtube url",
utilisation: userbot.prefix + "ytmp3 <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply("url nya om?")
if (!args[0].includes("youtu")) return m.reply("url nya salah om")
let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (limit) * 1024 < filesize  
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'compressing...')
  conn.sendButtonLoc(m.chat, await (await fetch (thumb)).buffer(), `
  *ＹＴＭＰ3 ＹＯＵＴＵＢＥ*
  *Title:* ${title}
  *Size:* ${filesizeF}`, userbot.packname, 'Menu', 'menu', m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + ".mp3", null, m)
}
}
