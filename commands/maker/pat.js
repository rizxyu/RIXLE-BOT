const { MessageType } = require("@adiwajshing/baileys")
const petPetGif = require("pet-pet-gif")
const { createSticker, StickerTypes } = require("wa-sticker-formatter")

module.exports = {
 name: ['pat'],
 type: ['sticker'],
 description: "untuk membuat sticker image Pat pat",
 utilsation: userbot.prefix + "pat",
 
async execute(m) {
 let { text, conn } = data

  let who =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
      ? conn.user.jid
      : m.sender;
  let animatedGif = await petPetGif(
    await conn
      .getProfilePicture(who)
      .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  )
  const sticker = await createSticker(animatedGif, {
    type: StickerTypes.FULL,
    pack: userbot.packname,
    author: userbot.author,
  })
  await conn.sendMessage(m.chat, sticker, MessageType.sticker, {
    quoted: m,
    mimetype: "image/webp",
  })
}
}
