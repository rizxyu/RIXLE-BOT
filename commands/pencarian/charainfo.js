const fetch = require("node-fetch")
module.exports = {
name: ["charainfo"],
type: ["searching"],
description: "mencari info karakter",
utilisation: userbot.prefix + "charainfo namekarakter",

async execute(m) {
let { conn, text } = data

let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `💬 *Name:* ${name}
💭 *Nickname:* ${alternative_names}
🔗 *Link*: ${url}
👤 *Character Type*: ${type}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)

}
}
