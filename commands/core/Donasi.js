const fetch = require('node-fetch')
module.exports = {
name: ["donasi"],
type: ["default"],
useLimit: true,
description: "mendonasikan uang anda ke creator",
utilisation: userbot.prefix + "creator",

async execute(m) {
let { conn } = data

let capt = `
HALO KAK ${conn.getName(m.sender)}
Ingin berdonasi Untuk mendukung Creator/Pemilik Bot?
Pilih Via Donasi Lewat Tombol dibawah!
`

conn.send3ButLoc(m.chat, await ( await fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWANV5KqHX-ewk_-hP3tU9Ery4CubWvyYbvQ&usqp=CAU")).buffer(), capt, userbot.packname, 'OVO', 'ovo', 'DANA', 'dana', 'Pulsa', 'pulsa', m)
}
}
