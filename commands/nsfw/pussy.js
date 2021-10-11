const f = require("node-fetch")
module.exports = {

name: ["pussy"],

type: ["nsfw"],
useLimit: true,
description: "memek anime",
utilisation: userbot.prefix + "pussy",

async execute(m) {
 let { conn } = data
let r = await f('https://hardianto.xyz/api/anime/random?nsfw=pussy&apikey=hardianto')

conn.sendButImg(m.chat, r, 'Nih', 'FTBOT', 'LANJUT', '#pussy', m)

}
}
