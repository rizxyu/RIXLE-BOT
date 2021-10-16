/*
* MADE BY RIZKY
*/
let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType
const fs = Ft.fs
const ytv = require("../Lib/scrape.js").ytv
const yta = require("../Lib/scrape.js").yta

module.exports = {
async execute(m, {button, args, text }) {
let { conn } = data

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
if (!args[0]) return m.reply('linknya mama')
download = await ytv([args[0]])
conn.sendFile(m.chat, download[0].video, "", null, m)
}
break
case "audio": {
if (!args[0]) return m.reply('linknya mama')
download = await yta([args[0]])
m.reply(`SEDANG DIPROSES`)
conn.sendFile(m.chat, download[0].audio, "", null, m)
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
