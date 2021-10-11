const fetch = require("node-fetch")
module.exports = {
name: ["pinterest"],
type: ["searching"],
description: "mencari image di pinteres",
utilisation: userbot.prefix + "pinteres text",

async execute(m) {
let { conn, text } = data

let res = await fetch(`https://api.zeks.me/api/pinimg?apikey=wuKyUYOZemCnEwu7d6olyc9uA3e&q=${text}`)
let json = await res.json()

conn.sendFile(m.chat, json.data, 'spek.jpg', `Done`, m)
  }
}
