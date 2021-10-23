const fs = Ft.fs
const tiktokmusic = require("../../Lib/scrape.js").tiktokmusic
const tiktok = require("../../Lib/scrape.js").tiktok

module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
if (!args[0]) return m.reply("please input url")
if (!args[0].includes("tiktok.com/")) return m.reply("url unvalid")
let ttdata = await tiktokmusic(url)
let teks = `Nickname : ${ttdata.meta.author.nickname}`
teks += `Desc : ${ttdata.meta.desc}`
teks += `Duration : ${ttdata.meta.video.duration}\n`
teks += `Pilih Type Dibawah Ini ${m.mention}`
conn.send2ButtonImg(m.chat, teks, ttdata.meta.cover,userbot.packname,`MP4`, `tnowm ${[args[0]]}`, `MP3` , `tmusic ${[args[0]]}`, {quoted: m, contextInfo: {"mentionedJid": conn.parseMention(teks) }})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
