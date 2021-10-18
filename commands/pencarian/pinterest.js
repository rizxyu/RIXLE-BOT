let scrap = require("../../Lib/scrape")

module.exports = {
name: ["pinterest"],
type: ["searching"],
description: "search image from pinterest",
utilisation: userbot.prefix+"jalantikus",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('where text?')
scrap.pinterest(text).then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*PINTEREST*\n\npencarian dari: " + text, m)
)
}
}
