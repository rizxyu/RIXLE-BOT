const fetch = require("node-fetch")
module.exports = {
name: ["animalfact"],
type: ["searching"],
description: "mencari fakta hewan",
utilisation: userbot.prefix + "animalfact",

async execute(m) {
let { conn, text } = data

try {
if (!text) return m.reply(`
*${userbot.prefix}${command} <nama hewan>*
contoh:
*${userbot.prefix}${command} <dog>*\n
┌〔 Opsi 〕
├ dog
├ cat
├ panda
├ fox
├ red_panda
├ koala
├ birb
├ raccoon
├ kangaroo
└────
`)
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  let json = await res.json()
  if (json.image) await conn.sendFile(m.chat, json.image, "", `💡${json.fact}`, m, 0, { thumbnail: Buffer.alloc(0) })
  } catch (e) {
   console.log("404 UNAVAILABLE")
   }
}
}
