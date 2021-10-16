/*
* MADE BY RIZKY
*/
const fs = Ft.fs
const { servers, yta, ytv } = require('../lib/y2mate')
let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType

module.exports = {
async execute(m, { button }) {
let { conn, args, text } = data

try {
switch (button) {
case "creator": {
conarray = []
ownerContact = ['6282328303332', '62822980698995','6285783417029','62823283033323','6285640020165','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'Rizky',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, 'Ini nomer pembuat bot gak usah chat aneh aneh',MessageType.text, { quoted: m} )
}
break
case "video": {
m.reply('nothing')
}
break
case "audio": {
if (!args[0]) return m.reply('linknya mana')
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])

conn.sendFile(m.chat, dl_link, title + '.mp3', null, m)
}
break
case "rules": {
teks = `ATURAN MEMAKAI BOT:
DILARANG SPAM COMMAND
JANGAN BANDINGIN BOT LAIN
KANJUT`
m.reply(teks)
}
break
}
} catch (e) {
console.log(e)
}
}
}
