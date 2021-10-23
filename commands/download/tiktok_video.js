const fs = Ft.fs
const tiktokmusic = require("../../Lib/scrape.js").tiktokmusic
const tiktok = require("../../Lib/scrape.js").tiktok
const fetch = require('node-fetch')
module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
try {
mhan = await conn.prepareMessage(m.chat, gam1, image, {thumbanil: gam1})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} catch(e) {
if (e.toString().includes('marker was')) {
mhan = await conn.prepareMessage(m.chat, gam1, image, {thumbanil: gam1})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} else if (e.toString().includes('ENOENT')) {
mhan = await conn.prepareMessage(m.chat, gam1, image, {thumbanil: gam1})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} else  {
return e
}
}
}
 buttons = [
{buttonId: `tnowm ${[args[0]]}`, buttonText: {displayText: 'MP3'}, type: 1},
{buttonId: `tmusic ${[args[0]]}`, buttonText: {displayText: 'MP4'}, type: 1}
]
if (!args[0]) return m.reply("please input url")
let ttdata = await tiktokmusic(`${[args[0]]}`)
let teks = `Nickname : ${ttdata.meta.author.nickname}\nDesc : ${ttdata.meta.desc}\nDuration : ${ttdata.meta.video.duration}\n\nPilih Type Dibawah Ini!!`

sendButImage(m.chat,teks,userbot.packname, await Ft.getBuffer(ttdata.meta.video.cover), {quoted: m, contextInfo:{"mentionedJid": conn.parseMention(teks)}})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
