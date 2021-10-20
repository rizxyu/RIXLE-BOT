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
     if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      if (!img) return m.reply(`Reply medianya ${userbot.prefix}s`)
       const head = await createSticker(img, {
        type: StickerTypes.CROPPED,
        pack: userbot.packname,
        author: userbot.author,
      })
      //const sticker = await createSticker(img, stickerMetadata)
      await conn.sendMessage(m.chat, head, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
      })
    }
  } catch (e) {
    m.reply(e)
  }
  //By mamang Rizky
}
}

