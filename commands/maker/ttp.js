let { exec } = require('child_process')
module.exports = {
 name: ['attp'],
 type: ['maker'],
 description: null,
 utilsation: userbot.prefix + "attp",
 
async execute(m) {
 let { text, conn } = data
 if (!text) return m.reply("teks??")
 let media = await Ft.getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`)
conn.sendMessage(m.chat, media, 'stickerMessage', {})
}
}

function getRandom (ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
