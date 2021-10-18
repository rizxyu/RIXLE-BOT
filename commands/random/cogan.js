let scrap = require("../../Lib/scrape")

module.exports = {
name: ["cogan"],
type: ["random"],
description: "random image cowo ganteng(boy handsome)",
utilisation: userbot.prefix + "cogan",

async execute(m){
let { conn } = data
 scrap.pinterest("cogan").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"nih kak cowonya",m))
   }
}
