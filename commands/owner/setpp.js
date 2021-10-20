module.exports = {
name: ["setpp"],
type: ['setting'],
description: "to set PP bot",
owner: true,
utilisation: global.userbot.prefix+ "setpp",

async execute(m) {
let { conn } = data

let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) return m.reply(`Foto tidak ditemukan`)
        conn.updateProfilePicture(bot, img)
        conn.reply(m.chat, 'Sukses Mengganti Foto Profile Bot!', m)
    }
}
}
