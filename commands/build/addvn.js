const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["addvn"],
type: ["media"],
useLimit: true,
description: "addvn cuy",
utilisation: userbot.prefix + "addvn nama + reply",

async execute(m) {
let { conn, args, text } = data
try {
     if (!text) return m.reply('teks nya?')
     let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
     let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
    if (/audio/.test(mime)) {
     let media = await conn.downloadAndSaveMediaMessage(q)
     let ran = ( text + '.mp3')
     fs.unlinkSync(media)
     let buff = fs.readFileSync(ran)
     m.reply(`Berhasil Menambahkan Audio Ke dalam Database untuk mengambil silahkan ketik ${userbot.prefix}getvn text`)
     fs.unlinkSync(ran)
    } else m.reply(`Balas vn/audio yang ingin disimpan ke database dengan caption *${userbot.prefix}addvn kata*`)
} catch (e) {
console.log("EROR GOBLOK")
 }
}
}
//Mengmastah🤓 anjay alok
        
