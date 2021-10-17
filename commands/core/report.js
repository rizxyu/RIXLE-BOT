module.exports = {
name: ["report"],
type: ["default"],
useLimit: true,
description: "report featured of other to owner",
utilisation: userbot.prefix + "report (text)",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply(`kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${userbot.prefix}report selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`)
    if (text.length < 10) return m.reply(`Laporan terlalu pendek, minimal 10 karakter!`)
    if (text.length > 1000) return m.reply(`Laporan terlalu panjang, maksimal 1000 karakter!`)
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(userbot.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
}
}
