const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker-formatter')
module.exports = {
    name: ["stc"],
type: ["create"],
description: "create sticker with waf",
utilisation: "#stc (reply)",
async execute(m) {
        let { conn } = data
        let stiker = false
        let q = m.quoted ? m.quoted : m
          let img = await q.download()
          if (!img) return m.reply(`balas stiker dengan perintah ${userbot.prefix}stc`)
           stiker = await sticker(img, null, { name: userbot.packname, author: userbot.author })
          if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
            quoted: m
          })
        }
      }
