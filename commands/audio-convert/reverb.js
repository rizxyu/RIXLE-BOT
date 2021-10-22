const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')

module.exports = {
name: ["reverb"],
type: ["audio"],
useLimit: true,
description: "convert audio music to reverb",
utilisation: userbot.prefix + "reverb",

async execute(m) {
let { conn } = data
try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let filename = path.join(__dirname, '../tmp/' + ran)
            let media = await conn.downloadAndSaveMediaMessage(q, filename)
            let ran = getRandom('.mp3')
            
            exec(`ffmpeg -i ${media} -i ${media} -filter_complex '[0] [1] afir=dry=10:wet=10' ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*TERJADI KESALAHAN!*_`)
                let buff = fs.readFileSync(filename)
                conn.sendFile(m.chat, buff, ran, null, m, true, { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(filename)
            })
        } else m.reply(`Balas vn/audio yang ingin diubah dengan caption *${userbot.prefix}reverb*`)
    } catch (e) {
        throw e
    }
}
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
