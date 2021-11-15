let scrap = require("../../Lib/scrape")

module.exports = {
name: ["waifu"],
type: ["random"],
description: "random image waifu",
utilisation: userbot.prefix + "waifu",

async execute(m){
let { conn } = data
 scrap.pinterest("waifu anime").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b, null, null,m, 0, { thumbnail: Buffer.alloc(0) }))
   }
}
