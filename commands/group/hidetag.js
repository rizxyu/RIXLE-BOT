
let { MessageType, mentionedJid } = require("@adiwajshing/baileys")

module.exports = {
name: ["hidetag"],
type: ['group'],
description: "menendang member grup(hanya boleh dilakukan ketika anda menjadi admin)",
admin: true,
utilisation: global.userbot.prefix+ "hidetag",

async execute(m) {
let { conn, text } = data
if (!text) return m.reply('teks untuk hidetag?')

 conn.fetchGroupMetadataFromWA(m.chat).then(({ participants }) => {
let ane = []
	       for (let i of participants){
	       ane.push(i.jid)
}
conn.sendMessage(m.chat, text, MessageType.text, { quoted: m, contextInfo: {"mentionedJid": ane}})
})
}
}
