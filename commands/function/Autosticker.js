const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../../Lib/sticker')
const uploadFile = require('../../Lib/uploadFile')
const uploadImage = require('../../Lib/uploadImage')
let { webp2png } = require('../../Lib/webp2mp4')


module.exports = { 
name: "autostiker", 
async functions(m) {
let { conn } = data

if (!m.fromMe && !m.isBaileys) {
if (!global.stimker == false ) return
        // try {
        let q = m
        let stiker = false
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) return
        if (/image/.test(mime)) {
            let img = await q.download()
            let link = await uploadImage(img)
            if (!img) return
            stiker = await sticker(0, link, userbot.packname, userbot.author)
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) throw 'Maksimal 10 detik!'
            let img = await q.download()
            let link = await uploadFile(img)
            if (!img) return
            stiker = await sticker(0, link, userbot.packname, userbot.author)
        } else if (m.text) {
            if (isUrl(m.text)) stiker = await sticker(false, m.text, userbot.packname, userbot.author)
            else return
        }
        if (stiker) await this.sendMessage(m.chat, stiker, 'stickerMessage', {
            quoted: m
        })
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true

}
}

const isUrl = (text) => {
    ret
