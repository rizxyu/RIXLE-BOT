const util = Ft.util
const path = Ft.path
const fs = Ft.fs
const ffmpeg = Ft.ffmpeg
const sox = require("sox-audio")
const { exec } = require("child_process")

module.exports = {
name: ["tempo"],
type: ["audio"],
description: "tempo effects audio",
utilisation: "#tempo <reply audio && number>",
async execute(m) {
let {conn, text} = data
 let req = text
encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(m.chat, hah, mediaType.audio, {mimetype: 'audio/mp4', ptt:true, quoted:m})
fs.unlinkSync(ran)
})
}
}

function getRandom (ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
