const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["blown"],
type: ["audio"],
useLimit: true,
description: "convert audio music to blown",
utilisation: userbot.prefix + "blown",

async execute(m) {
let { conn } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af acrusher=.1:1:64:0:log ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`)
    } catch (e) {
        throw e
    }
}
}
