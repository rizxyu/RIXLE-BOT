module.exports = {
name: ["fb"],
type: ["download"],
useLimit: true,
description: "download audio from twitter url",
utilisation: userbot.prefix + "fb (url)",

async execute(m) {
let { conn, args } = data

if (!args[0]) return m.reply('urlnya mana')
if (!args[0].includes("facebook")) return m.reply('url is wrong')

(async () => {
 var toolfb = require("fb-downloads");
 var videolink = await toolfb.getVideoUrl(args[0]);
 conn.sendFile(m.chat, videolink.sd, 'fb.mp4', `link hd: ${videolink.sd}`, m)
})();
}
}

//https://www.facebook.com/groups/922693771998697/permalink/929460654655342/?app=fbl
