module.exports = {
name: ["ttmusic"],
type: ["download"],
description: "download music from tiktok with url",
utilisation: userbot.prefix + "ttmusic <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply('where url?')
let { tiktokmusic } = require("../../Lib/scrape")
let p = await tiktokmusic(args[0])
conn.sendFile(m.chat, p.meta.music.playUrl, null, null, m)
}
}
