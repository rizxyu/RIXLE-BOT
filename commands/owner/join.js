let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

module.exports = {
name: ["join"],
type: ["owner"],
description: "join grup from link",
utilisation: userbot.prefix + "join",

async execute(m) {
let { conn, text } = data

let [_, code] = text.match(linkRegex) || []
    if (!code) return m.reply('Link invalid')
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
 }
}
