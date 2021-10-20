module.exports = {
name: ["setppgc"],
type: ['setting'],
description: "set photo group",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "setppgc",

async execute(m) {
let { conn } = data

let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) return m.reply('Gambar tidak ditemukan')
        await conn.updateProfilePicture(m.chat, img)
    } else return m.reply(`kirim/balas gambar dengan caption *${userbot.prefix + command}*`)
  }
}
