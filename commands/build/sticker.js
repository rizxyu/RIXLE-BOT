const { exec } = require('child_process')

module.exports = {
name: ["sticker"],
type: ["create"],
description: "membuat command",
utilisation: "#sticker <reply sticker>",
async execute(m) {
let encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await conn.downloadAndSaveMediaMessage(encmedia)
let ran = getRandom('.webp')
exec(`convert ${media} ${ran}`, (err) => {
if (err) return m.reply("error")
conn.sendMessage(m.chat, Ft.fs.readFileSync(ran), mediaType.sticker, { quoted: m })
Ft.fs.unlinkSync(ran) 
Ft.fs.unlinkSync(media)
});
}
}

function getRandom (ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`
}