const fs = Ft.fs
const fetch = require("node-fetch")
var { Canvas } = require("canvacord")

module.exports = {
name: ["rip"],
type: ["maker"],
useLimit: true,
description: "make Rip picture",
utilisation: userbot.prefix + "rip",

async execute(m) {
let { conn } = data
const name = conn.getName(m.sender)

Canvas.rip(await conn.getProfilePicture(m.sender)).then((p) => 
conn.sendFile(m.chat, p, 'p.jpg', `Telah meninggal ${conn.getName(m.sender)}`, null, m))
}
}
