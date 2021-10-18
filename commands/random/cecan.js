const fs = Ft.fs
const fetch = require("node-fetch")

module.exports = {

name: ["cecan"],

type: ["random"],
useLimit: true,
description: "cecan foto",
utilisation: userbot.prefix + "cecan",

async execute(m) {
 let { conn, text } = data

let res = await fetch('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/cecan.json')


let dot = await res.json()
    let json = dot[Math.floor(Math.random() * dot.length)]
 //let cp = `${json.url}`
conn.sendButImg(m.chat, await ( await fetch(json)).buffer(), 'NIH FOTO CECAN', userbot.packname, 'Next', 'cecan', m)
   }
}
