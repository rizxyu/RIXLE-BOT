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
conn.sendFile(m.chat, json.url, 'p.jpg', 'done', m)
   }
}
