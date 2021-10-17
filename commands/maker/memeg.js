const uploadFile = require('../../Lib/uploadFile')
const uploadImage = require('../../Lib/uploadImage')

module.exports = {
 name: ['memeg'],
 type: ['sticker'],
 description: "untuk membuat sticker text meme",
 utilsation: userbot.prefix + "memeg",
 
async execute(m) {
 let { text, conn } = data

if (!text) return m.reply(`uhm.. teksnya mana?\n\n${userbot.prefix + command} <teks atas>|<teks bawah>`)
  let [t1, t2] = text.split`|`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return m.reply(`Unknown Mimetype`)
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Mime ${mime} tidak didukung`)
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, (`https://api.memegen.link/images/custom/${encodeURIComponent(t1 ? t1 : '_')}/${encodeURIComponent(t2 ? t2 : '_')}.png`, {
    background: link
  }), 'meme.png', '© rizkyAdi', m)

}
}
