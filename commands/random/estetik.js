const fs = Ft.fs
const fetch = require("node-fetch")

module.exports = {

name: ["estetik"],

type: ["random"],
useLimit: true,
description: "aesthetic foto",
utilisation: userbot.prefix + "estetik",

async execute(m) {
 let { conn, text } = data

let res = await fetch('https://raw.githubusercontent.com/Rizxyu/FEATURE-BOT/main/random/Estetik.json')

let dot = await res.json()
    let json = dot[Math.floor(Math.random() * dot.length)]
 let cp = `${json.url}`

conn.sendButImg(m.chat, await (await fetch(json.url)).buffer(), `${json.teks}`, 'FTBOT', 'LAIN', '#estetik', m)

}
}
