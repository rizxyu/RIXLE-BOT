const { MessageType } = require("@adiwajshing/baileys")
const { createSticker, StickerTypes } = require("wa-sticker-formatter")
let axios = require("axios")

module.exports = {

name: ["coinflip"],

type: ["maker"],
useLimit: true,
description: "coin flip",
utilisation: userbot.prefix + "coinflip",

async execute(m) {
 let { conn } = data

	let res = await axios.get("https://no-api-key.com/api/v2/coin-flip")
	
	//if (res.status !== 200) throw await `${res.status} ${res.statusText}`;
	const sticker = await createSticker(res.data.gif, {
		type: StickerTypes.FULL,
		pack: userbot.packname,
		author: userbot.author,
	})
	await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	})
	const head = await createSticker(res.data.image, {
		type: StickerTypes.FULL,
		pack: userbot.packname,
		author: userbot.author,
	})
	await conn.sendMessage(m.chat, head, MessageType.sticker, {
		quoted: m,
		mimetype: "image/webp",
	})
	await m.reply(res.data.coin)
}
}

//Punya patur
