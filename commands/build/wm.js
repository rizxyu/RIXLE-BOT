const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker')
const uploadFile = require('../../Lib/uploadFile')
const uploadImage = require('../../Lib/uploadImage')
let { webp2png } = require('../../Lib/webp2mp4')

module.exports = {
name: ["wm"],
type: ["create"],
description: "wm sticker",
utilisation: "#wm (reply sticker)",
async execute(m) {
let { conn, text } = data

let stiker = false
  try {
    let [packname, ...author] = text.split`|`
    author = (author || []).join`|`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) return m.reply(`balas stiker dengan perintah ${userbot.prefix}wm  <packname>|<author>`)
      stiker = await sticker(0, out, packname || '', author || '')
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) return m.reply(`balas gambar dengan perintah ${userbot.prefix}wm  <packname>|<author>`)
      stiker = await sticker(0, link, packname || '', author || '')
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) return m.reply(`balas video dengan perintah ${userbot.prefix}wm <packname>|<author>`)
      stiker = await sticker(0, link, packname || '', author || '')
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else return m.reply('Balas stikernya!')
  }
}
}
