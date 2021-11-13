let fs = require('fs')
const { createHash } = require('crypto')
let moment = require('moment-timezone')

module.exports = {
name: ["verify"],
type: ["owner"],
owner: true,
description: "added member to prem",
utilisation: userbot.prefix + "verify",

async execute(m) {
let { conn, text } = data

    const json = JSON.parse(fs.readFileSync('./db/daftar.json'))
    let sn = createHash('md5').update(m.sender).digest('hex')
    let exp = 0
    let level = 1
    let role = 'Bronze V'
    let waktu = moment.tz('Asia/Jakarta').format('HH:mm')
    if (json.includes(m.sender)) return m.reply(`${conn.getName(m.sender)} sudah terdaftar!`)
    json.push(m.sender, sn, exp, level, role, waktu)
    fs.writeFileSync('./db/daftar.json', JSON.stringify(json))
    let player = fs.readFileSync('./db/daftar.json')
     
    let teks = ` 
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 PENDAFTARAN PLAYER 」*
┕────────────┈ ⳹
*Nama :* ${conn.getName(m.sender)}
*APi :* wa.me/${m.sender.split('@')[0]}
*Waktu :*  ${waktu}
*Kode pin :* ${sn}
*total Player :* ${player.length}

*Anda Sudah Resmi Menjadi Pengguna Dalam RixleBot*

*Noted :*
*Kode pin Kamu, Adalah Kode Saat Kamu Login Dalam Permainan Nanti,
Jadi Jangan Sampai Hilang Saya Sarankan Anda Menyalinnya Kedalam Catatan Anda/Kasih Tanda Bintang 🌟 Pesan Ini, Atau Ketik ${userbot.prefix}cekpin*
「 RIXLE-BOT 」*
`
m.reply(teks)
}
}
