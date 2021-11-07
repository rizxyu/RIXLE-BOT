const { tiktokmusic } = require("../../Lib/scrape.js")
module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <url>",

async execute(m) {
let { conn, args } = data
try {
if (!args[0]) return m.reply('mana urlnya')
let ttdata = await tiktokmusic(args[0])
let teks = `*Nama :* ${ttdata.meta.author.nickname}\n*Deskripsi :* ${ttdata.meta.desc}\n*Durasi* : ${ttdata.meta.video.duration}\n\n_Pilih Tipe Dibawah Ini_  ${m.mention}`
conn.send2ButtonImg(m.chat, teks, await Ft.getBuffer(ttdata.meta.video.cover), userbot.packname, "MP3 🎧","tmusic "+args[0], "MP4 🎥", "tnowm "+args[0], {contextInfo:{"mentionedJid": conn.parseMention(teks)}})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
