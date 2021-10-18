const uploadImage = require('../../Lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker')

module.exports = {
 name: ['smeme'],
 type: ['sticker'],
 description: "untuk membuat sticker image text meme",
 utilsation: userbot.prefix + "smeme",
 
async execute(m) {
 let { text, conn } = data
let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply(`balas gambar dengan perintah\n\n${userbot.prefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`)
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*Mime ${mime} tidak didukung!*_`)
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '_')}/${encodeURIComponent(bawah ? bawah : '_')}.png?background=${url}`
    //stiker = await sticker(false, meme )
    if (stiker) await conn.sendMessage(m.chat, meme, MessageType.sticker, {
        quoted: m
    })
}
}
