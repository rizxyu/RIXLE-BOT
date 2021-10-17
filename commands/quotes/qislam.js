const fetch = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["qislam"],
type: ["quotes"],
useLimit: true,
description: "quotes kata kata islami",
utilisation: userbot.prefix + "qislam",

async execute(m) {
 let { conn } = data
let cuk = await fetch('https://raw.githubusercontent.com/Rizxyu/FEATURE-BOT/main/random/QuotesIslami.json')
let dot = await cuk.json()
let json = dot[Math.floor(Math.random() * dot.length)]
m.reply(json)
}
}
