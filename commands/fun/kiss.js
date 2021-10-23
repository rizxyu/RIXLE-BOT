
		
let fetch = require("node-fetch");
const { MessageType } = require("@adiwajshing/baileys");
const { createSticker, StickerTypes } = require("wa-sticker-formatter");
module.exports = {
name: ["kiss"],
type: ["fun"],
description: "kiss",
utilisation: userbot.prefix + "kiss <tag>",

async execute(m) {
let { conn } = data
if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
  if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
  let res = await fetch("https://waifu.pics/sfw/kiss");
  if (!res.ok) throw await res.text();
  let json = await res.json();

  if (json.url) {
      const sticker = await createSticker(json.url, {
        type: StickerTypes.CROPPED,
        pack: userbot.packname,
        author: userbot.author,
      });
      await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
        quoted: m,
        mimetype: "image/webp",
      })
      m.reply(`@${m.sender.split("@")[0]} ${command} ${m.mentionedJid.map((user) => user === m.sender ? "themselves " : `@${user.split("@")[0]}`).join(", ")}`)
}
  else throw json;
}
}
