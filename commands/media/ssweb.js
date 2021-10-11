const fetch = require("node-fetch")
module.exports = {
name: ["ssweb"],
type: ["information"],
description: "screenshot web link",
utilisation: userbot.prefix + "ssweb <link>",

async execute(m) {
let { conn, args } = data
if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(`https://nurutomo.herokuapp.com/api/ssweb?delay=1000&url=${encodeURIComponent(url)}&full=f`)).buffer()
conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
}