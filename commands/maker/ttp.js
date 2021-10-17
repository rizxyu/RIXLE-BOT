module.exports = {
 name: ['ttp'],
 type: ['Sticker'],
 description: "untuk membuat sticker teks bergerak",
 utilsation: null,
 
async execute(m) {
 let { text, conn } = data
 if (!text) return m.reply("teks??")
 let media = await Ft.getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`)

conn.sendMessage(m.chat, media, 'stickerMessage', {quoted: m})
}
}