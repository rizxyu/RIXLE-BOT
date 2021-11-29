const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["cutvideo"],
type: ["audio"],
useLimit: true,
description: "cut video",
utilisation: userbot.prefix + "cutvideo reply + args",

async execute(m) {
let { conn, args } = data

try {
       if (!args[0]) return m.reply('masukkan angka')
       if (!args[1]) return m.reply('masukkan angka lagi')
       if (isNaN(args[0])) return m.reply('Pake angka')
       if (isNaN(args[1])) return m.reply('Pake angka')
//Lawak kontol udah susah susah bikin malah dicomot Ama di timpa wm
//G senheng bilang anj

        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/video/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let out = Buffer.alloc(0)
            let ran = getRandom('.mp3')
          exec(`ffmpeg -ss 00:01:00 -i ${media} -to ${args[1]} -c copy ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) m.reply(`_*Error!*_`)
          let buff = fs.readFileSync(ran)
        await conn.sendFile(m.chat, buff, ran, 'succes memotong video🎥', m, 0, { thumbnail: Buffer.alloc(0)})
       fs.unlinkSync(ran)
            })
       } else m.reply(`Reply video yang ingin di potong menit videonya dengan caption *${userbot.prefix}cutvideo reply 00:00:01*`)
     } catch (e) {
     m.reply(`${e}`)
    }
}
}
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
