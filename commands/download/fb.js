const toolfb = require("fb-downloads")

module.exports = {
name: ["fb"],
type: ["download"],
useLimit: true,
description: "download video from facebook url",
utilisation: userbot.prefix + "fb (url)",

async execute(m) {
let { conn, args } = data

if (!args[0]) return m.reply('urlnya mana')
if (!args[0].includes("facebook")) return m.reply('url is wrong')
 const videolink = await toolfb.getVideoUrl(args[0])
 conn.sendFile(m.chat, videolink.sd, 'fb.mp4', `link hd: ${videolink.sd}\n\n*Jangan lupa donasi ke owner ya!*`, m)
}
}
/*
*Anda siapa ya
*/
