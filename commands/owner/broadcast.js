const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["bc"],
type: ["owner"],
description: "broadcast ke user atau pengguna dan ini bersifat hanya digunakan oleh owner",
utilisation: userbot.prefix + "bc <args>",
  async execute(m) {
 let { conn, text } = data

  let chats = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  
  let teks = text ? text : cc.text
  
  m.reply(`Sedang mengirim pesan ${chats.length}\nestimasi selesai *${chats.length * 1.5} detik*`)
  
 if (chats) {
   await delay(1500)
   await conn.sendButtonLoc( m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1pVfdb1zUoSve4Unc08jl5BpCHwfys8qxA&usqp=CAU')).buffer(), `${teks}\n\n[ BROADCAST ]`, `Made With ❣️ Fear Team`, `CREATOR`, `y`, m)
    }
    m.reply('BROADCAST SELESAI')
  }
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
