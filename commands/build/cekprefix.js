module.exports = {
name: ["cekprefix"],
custom: true,
description: "cekprefix",
utilisation: userbot.prefix + "cekprefix",
type: ["random"],
async execute(m){
let { conn } = data

conn.sendButton(m.chat, '*Prefix Saat Ini:* ' + userbot.prefix , userbot.packname,
'Menu', 'menu', m)

}
}
