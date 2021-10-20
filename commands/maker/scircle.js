const fs = Ft.fs
const fetch = require("node-fetch")
var { Canvas } = require("canvacord")

module.exports = {
name: ["scircle"],
type: ["maker"],
useLimit: true,
description: "make sticker circle",
utilisation: userbot.prefix + "scircle",

let qe = m.quoted ? m.quoted : m
  let mime = (qe.msg || qe).mimetype || ""
  if (/image/.test(mime)) {
  let img = await qe.download();
  Canvas.circle(img).then((p) =>
  stiker = await sticker(false, p, userbot.packname, userbot.author))
     conn.sendMessage(m.chat, stiker, 'stickerMessage', {quoted: m})
  } else return m.reply('reply image')
}
}
