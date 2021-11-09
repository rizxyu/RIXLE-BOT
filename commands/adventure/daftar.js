const fs = require ('fs') 
const crypto = require('crypto')
const request = require('request')
const fetch = require('node-fetch'),

module.exports = { // By @arifirazzaq2001
name: ["daftar"],
type: ["Petualangan"]

async execute(m) {
let { conn, args } = data
const sender = m.sender
        const addPlayerUser = (userid, sender, serials) => {
            const obj = { id: userid, name: sender, serial: serials }
            _player.push(obj)
            fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(_player))
        }
        const kodePinPlayer = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const buatCekPlayernya = (sender) => {
            let status = false
            Object.keys(_player).forEach((i) => {
                if (_player[i].id === m.sender) {
                    status = true
                }
            })
            return status
        }
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const _player = JSON.parse(fs.readFileSync('./tmp/adventureDB/player.json'))
const isPlayer = _player.includes(m.sender)
const iscekplayer = buatCekPlayernya(m.sender)
let setPin = kodePinPlayer(6)

if (m.sender === conn.user.jid) return
if (m.sender === isAdmin) return
if (iscekplayer) return m.reply('Anda Sudah Terdaftar Sebelumnya.') 
let img =  ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc675b80s5tCNwEdtfTpmfebv1uUlk4f2huA&usqp=CAU')).buffer()
let stickGame = m.sender

_player.push(m.sender)
fs.writeFileSync('./tmp/adventureDB/player.json', JSON.stringify(_player))
fs.writeFileSync('./tmp/adventureDB/pin.json'), JSON.stringify(setPin))
addPlayerUser(m.sender, kodePinPlayer)
let teks = ` _made in @arifirazzaq2001_

╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 PENDAFTARAN PLAYER 」*
┕────────────┈ ⳹
*Nama :* ${m.pushname}
*APi :* wa.me/${m.sender.split('@')[0]}
*Kode Pin :* ${setPin}
*total Player :* ${_player.length}

*Anda Sudah Resmi Menjadi Pengguna Gamers Dalam RixleBot*

*Noted :*
*Kode Pin Kamu, Adalah Kode Saat Kamu Login Dalam Permainan Nanti,
Jadi Jangan Sampai Hilang Saya Sarankan Anda Menyalinnya Kedalam Catatan Anda/Kasih Tanda Bintang 🌟 Pesan Ini, Atau Ketik ${userbot.prefix}cekpin*
「 RIXLE-BOT 」*
`
conn.sendMessage(m.chat, img, MessageType.image, { 
caption: teks, 
 quoted: m, 
  contextInfo: { 
      mentionedJid: [m.sender] 
      }
    }) 
console.log(`${m.pushname} Berhasil Membuat Json Player Games`)
} 
} 

function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
