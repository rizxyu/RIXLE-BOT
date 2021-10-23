const { tiktokmusic } = require("../../Lib/scrape.js")
module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { text } = data
let url = m.quoted.text || text;
//if ( m.quoted.text) return m.reply('reply textnya')
if (!url) return m.reply("please input url")
try {
let ttdata = await tiktokmusic(url)
let teks = `*Nickname :* ${ttdata.meta.author.nickname}\n*Desc :* ${ttdata.meta.desc}\n*Duration* : ${ttdata.meta.video.duration}\n\n_Pilih Type Dibawah Ini_ ${m.mention}`
conn.send2ButtonImg(m.chat, teks, await Ft.getBuffer(ttdata.meta.video.cover), userbot.packname, "MP3","tmusic "+url, "MP4", "tnowm "+url, {contextInfo:{"mentionedJid": conn.parseMention(teks)}})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
//Uh
}
