const fetch = require('node-fetch')

module.exports = {
name: ["fitnah"],
type: ['group'],
description: "fitnah orang menggunakan" + userbot.prefix + "fitnah text1 @tag text 2",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "fitnah",

async execute(m) {
let { conn, text } = data


if (!text) return conn.reply(m.chat, `Contoh penggunaan:\n${userbot.prefix + command} aku siapa? @6282328303332 kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6282328303332@s.whatsapp.net'] } })
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `Contoh penggunaan:\n${userbot.prefix + command} aku siapa? @6282328303332 kamu ownerku ><`, m, { contextInfo: { mentionedJid: ['6282328303332@s.whatsapp.net'] } })
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
}

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
