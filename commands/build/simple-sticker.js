const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker-formatter')
module.exports = {
    name: ["stc", "stickersmall", "stcm"],
type: ["create"],
description: "create sticker with waf",
utilisation: "#sticker (reply)",
async execute(m) {
        let { conn } = data
        let stiker = false
        let q = m.quoted ? m.quoted : m
          let img = await q.download()
          if (!img) return m.reply(`balas stiker dengan perintah ${userbot.prefix}stc`)
           stiker = await sticker(img, null, { name: userbot.packname, author: author })
          if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
            quoted: m
          })
        }
      }
