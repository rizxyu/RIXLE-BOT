const fs = Ft.fs
const dl = require("../../Lib/scrape.js")

module.exports = {
name: ["ttmusic"],
type: ["download"],
description: "download music from tiktok with url",
utilisation: userbot.prefix + "ttmusic <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply('where url?')

let { meta } = await dl.tiktokmusic(args[0])
conn.sendFile(m.chat, meta.music.playUrl, "u.mp3", null, m)
}
}
