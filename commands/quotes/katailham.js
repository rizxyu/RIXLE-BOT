const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["katailham"],

type: ["quotes"],
useLimit: true,
description: "quotes kata ilham",
utilisation: userbot.prefix + "katailham",

async execute(m) {
 let { conn, text } = data

let cuk = await kntl('https://github.com/Rizxyu/FEATURE-BOT/raw/main/random/katailham.json')
let dot = await cuk.json()
    let json = dot[Math.floor(Math.random() * dot.length)]

m.reply(json)
}
}
