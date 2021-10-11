const fetch = require("node-fetch")
module.exports = {
name: ["gsmarena"],
type: ["searching"],
description: "mencari spesifikasi hp di web gsm",
utilisation: userbot.prefix + "gsmarena Merk hp",

async execute(m) {
let { conn, text } = data

let res = await fetch(`https://api.zeks.me/api/gsmArena?apikey=wuKyUYOZemCnEwu7d6olyc9uA3e&q=${text}`)
let json = await res.json()

conn.sendFile(m.chat, json.data.thumb, 'spek.jpg', `*Merk:* ${json.data.title}\n*Network:* ${json.data.full_desc.object.Network}\n*launch:* ${json.data.full_desc.object.Launch}\n*Body:* ${json.data.full_desc.object.Body}\n*Display:* ${json.data.full_desc.object.Display}\n*Platform:* ${json.data.full_desc.object.Platform}\n*Memory:* ${json.data.full_desc.object.Memory}\n*Battery:* ${json.data.full_desc.object.Battery}\n*Comms:* ${json.data.full_desc.object.Comms}`, m)
}
}
