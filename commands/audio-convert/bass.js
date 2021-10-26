const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["bass"],
type: ["audio"],
useLimit: true,
description: "convert audio normal to bass super",
utilisation: userbot.prefix + "bass reply + args",

async execute(m) {
let { conn, args } = data
try {
        if (!args[0]) return m.reply('masukkan angka')
       if (!args[1]) return m.reply('masukkan angka lagi')
  
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=${args[0]}:width_type=o:width=1:g=${args[1]} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${userbot.prefix}bass*`)
    } catch (e) {
        throw e
    }
}
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
