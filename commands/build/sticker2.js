const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker')
const { createSticker, StickerTypes } = require("wa-sticker-formatter")


module.exports = {
name: ["s"],
type: ["create"],
description: "create sticker with waf",
utilisation: "#s (reply)",
async execute(m) {
let { conn } = data

let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) return m.reply(`Reply medianya ${userbot.prefix}s`)
       const wsf = await createSticker(img, {
        type: StickerTypes.FULL,
        pack: userbot.packname,
        author: userbot.author,
      })
       await conn.sendMessage(m.chat, wsf, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
      })
     } else if (/video/.test(mime)) {
      let img = await q.download()
      if (!img) return m.reply(`Reply medianya ${userbot.prefix}s`)
       const head = await createSticker(img, {
        type: StickerTypes.FULL,
        pack: userbot.packname,
        author: userbot.author,
      })
      await conn.sendMessage(m.chat, head, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
      })
  } else catch (e) {
    m.reply(e)
  }
  
}
}

