const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["cutv"],
type: ["audio"],
useLimit: true,
description: "cut video",
utilisation: userbot.prefix + "cutv",

async execute(m) {
let { conn, args } = data
try {
if (!args[0]) return m.reply('detik?')
if (!args[1]) return m.reply('detik?')
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/video/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp4')
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) m.reply(`_*Error!*_`)
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, `done`, m)
                fs.unlinkSync(ran)
            })
        } else m.reply(`Balas video yang ingin diubah dengan caption *${userbot.prefix}cutv*`)
    } catch (e) {
        throw e
    }
}
}
//Punya mamang rizky
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
