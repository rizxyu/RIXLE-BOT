let scrap = require("../../Lib/scrape")

module.exports = {
name: ["aesthetic"],
type: ["random"],
description: "random image aesthetic",
utilisation: userbot.prefix + "aesthetic",

async execute(m){
let { conn } = data
 scrap.pinterest("aesthetic photo").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b, null, null, m, 0, { thumbnail: Buffer.alloc(0) }))
   }
}
