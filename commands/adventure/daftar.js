const fs = require ('fs') 
const crypto = require('crypto')
const request = require('request')

module.exports = { // By @arifirazzaq2001
name: ["daftar"],
type: ["Petualangan"],
userPlayer: true,

async execute(m) {
let { conn, args } = data
const kodePinPlayer = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const _player = JSON.parse(fs.readFileSync('./tmp/adventureDB/player.json'))
const isPlayer = _player.includes(m.sender)
let setPin = kodePinPlayer(6)
setPin = fs.writeFileSync('./tmp/adventureDB/pin.json')
let pin = setPin

if (m.sender === conn.user.jid) return
if (m.sender === isAdmin) return
_player.push(m.sender)
fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(_player))
let teks = ` _made in @arifirazzaq2001_

╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 PENDAFTARAN PLAYER 」*
┕────────────┈ ⳹
*Nama :* ${m.pushname}
*APi :* wa.me/${m.sender.split('@')[0]}
*Kode Pin :* ${pin}
*total Player :* ${_player.length}

*Anda Sudah Resmi Menjadi Pengguna Gamers Dalam RixleBot*

*Noted :*
*Kode Pin Kamu, Adalah Kode Saat Kamu Login Dalam Permainan Nanti,
Jadi Jangan Sampai Hilang Saya Sarankan Anda Menyalinnya Kedalam Catatan Anda/Kasih Tanda Bintang 🌟 Pesan Ini, Atau Ketik ${userbot.prefix}cekpin*
「 RIXLE-BOT 」*
`
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




