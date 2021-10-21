const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["slow"],
type: ["audio"],
useLimit: true,
description: "convert audio music to slow",
utilisation: userbot.prefix + "slow",

async execute(m) {
let { conn } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=48000*0.8" ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${userbot.prefix}slow*`)
    } catch (e) {
        throw e
    }
}
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
//Done
