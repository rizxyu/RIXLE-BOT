const fs = Ft.fs
const fetch = require("node-fetch")
var { Canvas } = require("canvacord")

module.exports = {
name: ["rip"],
type: ["maker"],
useLimit: true,
description: "make Rip picture with reply or no",
utilisation: userbot.prefix + "rip",

async execute(m) {
let { conn } = data
const name = conn.getName(m.sender)

if (m.quoted.sender) {
Canvas.rip(await conn.getProfilePicture(m.quoted.sender)).then((p) => 
conn.sendFile(m.chat, p, 'p.jpg', `Rip ${conn.getName(m.quoted.sender)}`, null, m))
} else if (conn.user.jid) {
m.reply('hmmm')
Canvas.rip(await conn.getProfilePicture(conn.user.jid)).then((p) => 
conn.sendFile(m.chat, p, 'p.jpg', `Rip ${conn.getName(conn.user.jid)}`, null, m))
}
}
}
