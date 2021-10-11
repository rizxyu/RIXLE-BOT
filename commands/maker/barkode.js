let qrcode = require("qrcode")

module.exports = {
name: ["qrcode"],
type: ["maker"],
useLimit: true,
description: "membuat barkode",
utilisation: userbot.prefix + "qrcode text",

async execute(m) {
let { conn, text } = data
conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'DONE', m)
}
}
