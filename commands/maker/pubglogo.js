let fetch = require('node-fetch')

module.exports = {
name: ["pubg"],
    type: ['maker'],
    description: "make pubg logo",
    utilisation: global.userbot.prefix+ "pubg",
async execute(m) {
let { conn, args } = data

let response = args.join(' ').split('|')
  if (!args[0]) return m.reply('Masukkan Parameter')
let res = await fetch(`https://recoders-area.caliph.repl.co/api/textmaker/game?text=${response[0]}&text2=${response[1]}&theme=pubg&apikey=FreeApi`)
  let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'pubglogo.jpg', `Nih kak`, m, false)
}
}
