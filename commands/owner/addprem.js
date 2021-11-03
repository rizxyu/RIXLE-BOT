let fs = require('fs')

module.exports = {
name: ["addprem"],
type: ["owner"],
owner: true,
description: "added member to prem",
utilisation: userbot.prefix + "addprem",

async execute(m) {
let { conn, text } = data

const json = JSON.parse(fs.readFileSync('./db/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) return m.reply(`${conn.getName(who)} sudah premium!`)
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./db/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang premium!`)

    delete require.cache[require.resolve('../../config')]
    require('../../config')

}
}
