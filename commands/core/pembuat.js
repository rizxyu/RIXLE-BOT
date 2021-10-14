let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType

module.exports = {
name: ["creator"],
type: ["default"],
useLimit: true,
description: "menampilkan daftar pembuat bot",
utilisation: userbot.prefix + "creator",

async execute(m) {
let { conn } = data
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
}
