const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["gg"],
type: ["audio"],
useLimit: true,
description: "vn/audio to convert like google sound",
utilisation: userbot.prefix + "gg",

async execute(m) {
let { conn, args } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -ar 48000 -vn -c:a libopus ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${userbot.prefix}gg*`)
    } catch (e) {
        throw e
    }
}
}
//Punya mamang rizky
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
