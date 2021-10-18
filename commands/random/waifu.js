let scrap = require("../../Lib/scrape")

module.exports = {
name: ["waifu"],
type: ["random"],
description: "random image waifu",
utilisation: userbot.prefix + "cecan",

async execute(m){
let { conn } = data
 scrap.pinterest("waifu").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Ih like anime you pasti wibu",m))
   }
}
