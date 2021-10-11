const f = require("node-fetch")
module.exports = {

name: ["futa"],

type: ["nsfw"],
useLimit: true,
description: "BOkep",
utilisation: userbot.prefix + "futa",

async execute(m) {
 let { conn } = data

let r = await f('https://hardianto.xyz/api/anime/random?nsfw=futanari&apikey=hardianto')

m.reply('Halo pengocok')
conn.sendButImg(m.chat, r, 'Nih pengocok','FT BOT','Ok','ok', m)

  }
}
