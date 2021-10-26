const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["rgb"],
type: ["audio"],
useLimit: true,
description: "convert video normal to rgb",
utilisation: userbot.prefix + "rgb reply",

async execute(m) {
let { conn, args } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/image/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.jpg')
            exec(`ffmpeg -i ${media} -vf extractplanes=r -c:v libx264rgb -pix_fmt rgb24 ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, { quoted: m, mimetype: 'image/jpeg' })
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas video yang ingin diubah dengan caption *${userbot.prefix}rgb*`)
    } catch (e) {
        throw e
    }
}
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
