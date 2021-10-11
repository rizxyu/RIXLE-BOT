const fs = Ft.fs
const fetch = require("node-fetch")
var { Canvas } = require("canvacord")

module.exports = {
name: ["circle"],
type: ["maker"],
useLimit: true,
description: "make circle picture",
utilisation: userbot.prefix + "circle",

async execute(m) {
let { conn } = data
const name = conn.getName(m.sender)

Canvas.circle(await conn.getProfilePicture(m.sender)).then((p) => conn.sendFile(m.chat, p, 'pp.jpg', 'done\n Made with canvas', m))}
}

