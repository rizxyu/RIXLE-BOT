let { webp2mp4 } = require('../../Lib/webp2mp4')
let { ffmpeg } = require('../../Lib/converter')
const fs = require('fs')
const { exec } = require('child_process')
const { toAudio } = require('../../Lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

module.exports = {

name: ["vfps60"],

type: ["maker"],
useLimit: true,
description: "video get 60fps",
utilisation: userbot.prefix + "vfps60 (reply)",

async execute(m) {
 let { conn, text } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/video/.test(mime)) {
            let filename = path.join(__dirname, '../tmp/' + ran)
            let media = await conn.downloadAndSaveMediaMessage(q, filename)
            let ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -y -filter:v "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=60'" ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(filename)
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
