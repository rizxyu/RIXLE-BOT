const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["bcgc"],
type: ["owner"],
owner: true,
description: "broadcast ke user atau pengguna dan ini bersifat hanya digunakan oleh owner",
utilisation: userbot.prefix + "bcgc <args>",
  async execute(m) {
 let { conn, text } = data

  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  
  let teks = text ? text : cc.text
  
  m.reply(`Sedang mengirim pesan ${groups.length}\nestimasi selesai *${groups.length * 1.5} detik*`)
  
 for ( let id of groups) {
   await delay(1500)
   await conn.send2ButtonLoc(id, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX1y1MoIShEpyxr3Yh8WxGE8rHeccoeoBNw&usqp=CAU')).buffer(), `${teks}\n\n[ BROADCAST ]`, userbot.packname,`MENU`, `menu`, `CREATOR`, `creator`, m)
    }
    m.reply('BROADCAST SELESAI')
  }
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
