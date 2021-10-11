const fs = Ft.fs
const ytv = require("../../Lib/scrape.js").ytv

module.exports = {
name: ["ytmp4"],
type: ["download"],
description: "download video from youtube url",
utilisation: userbot.prefix + "ytmp4 <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply("url nya om?")
if (!args[0].includes("youtu")) return m.reply("url nya salah om")
download = await ytv([args[0]])
conn.sendFile(m.chat, download[0].video, "", null, m)
}
}
