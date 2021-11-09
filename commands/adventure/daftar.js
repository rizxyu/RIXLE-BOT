const fs = require ('fs') 
const crypto = require('crypto')
const request = require('request')
const fetch = require('node-fetch')

module.exports = { // By @arifirazzaq2001
name: ["daftar"],
type: ["Petualangan"], 
description: "Registry Your Account To Playing On games",
utilisation: userbot.prefix+"daftar",

async execute(m) {
let { conn, args } = data
        const addPlayerUser = (userid, sender, serials) => {
            const obj = { id: userid, name: m.sender, serial: serials }
            m._player.push(obj)
            fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(m._player))
        }
        const kodePinPlayer = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const buatCekPlayernya = (sender) => {
            let status = false
            Object.keys(m._player).forEach((i) => {
                if (m._player[i].id === m.sender) {
                    status = true
                }
            })
            return status
        }
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const iscekplayer = buatCekPlayernya(m.sender)
let setPin = kodePinPlayer(6)

if (m._player.includes(m.sender)) {
if (iscekplayer) return m.reply('Anda Sudah Terdaftar Sebelumnya.') 

m._player.push(m.sender)
fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(m._player))
fs.writeFileSync('./tmp/adventureDB/pin.json', JSON.stringify(setPin))
addPlayerUser(m.sender, kodePinPlayer)
let teks = ` _made in @arifirazzaq2001_

╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 PENDAFTARAN PLAYER 」*
┕────────────┈ ⳹
*Nama :* ${m.pushname}
*APi :* wa.me/${m.sender.split('@')[0]}
*Kode Pin :* ${setPin}
*total Player :* ${m._player.length}

*Anda Sudah Resmi Menjadi Pengguna Gamers Dalam RixleBot*

*Noted :*
*Kode Pin Kamu, Adalah Kode Saat Kamu Login Dalam Permainan Nanti,
Jadi Jangan Sampai Hilang Saya Sarankan Anda Menyalinnya Kedalam Catatan Anda/Kasih Tanda Bintang 🌟 Pesan Ini, Atau Ketik ${userbot.prefix}cekpin*
「 RIXLE-BOT 」*
`
m.reply(teks)
console.log(`${m.pushname} Berhasil Membuat Json Player Games`)
} 
} 
}

function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
