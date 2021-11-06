let fs = require('fs')

module.exports = {
name: ["delprem"],
type: ["owner"],
owner: true,
description: "join grup from link",
utilisation: userbot.prefix + "delprem",

async execute(m) {
let { conn, text } = data

const json = JSON.parse(fs.readFileSync('./db/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) return m.reply(`${conn.getName(who)} belum premium!`)
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang bukan premium!`)

    delete require.cache[require.resolve('../../config')]
    require('../../config')


}
}
