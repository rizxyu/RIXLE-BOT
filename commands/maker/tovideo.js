let { webp2mp4 } = require('../../Lib/webp2mp4')
let { ffmpeg } = require('../../Lib/converter')

module.exports = {

name: ["tovideo"],

type: ["maker"],
useLimit: true,
description: "sticker gif to video",
utilisation: userbot.prefix + "tovideo (reply)",

async execute(m) {
 let { conn, text } = data

if (!m.quoted) return m.reply(`Balas stiker/audio yang ingin diubah menjadi video dengan perintah ${userbot.prefix + command}`)
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) return m.reply(`Balas stiker/audio yang ingin diubah menjadi video dengan perintah ${userbot.prefix + command}`)
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', 'succes convert to video', m, 0, { thumbnail: out })
}
}
