const fetch = require('node-fetch')

module.exports = {
name: ["twitter"],
type: ["download"],
useLimit: true,
description: "download video or audio from twitter url",
utilisation: userbot.prefix + "twitter <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return m.reply("url nya om?")

let res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${args}`)
let json = await res.json()

conn.send3Button(m.chat,`*Twitter Downloader*\n Pilih type dibawah`, userbot.prefix, `HD`, `thd ${args[0]}`, `SD`, `tsd ${args[0]}`, `AUDIO`, `taudio ${args[0]}`, m)
}
}
