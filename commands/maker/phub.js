let fetch = require('node-fetch')

module.exports = {
name: ["phub"],
    type: ['maker'],
    description: "phub logo",
    utilisation: global.userbot.prefix+ "phub",
async execute(m) {
let { conn, args } = data

response = args.join(' ').split('|')
  if (!args[0]) return m.reply('Masukkan Parameter')

let res = `https://api.zeks.me/api/phlogo?apikey=wuKyUYOZemCnEwu7d6olyc9uA3e&text1=${response[0]}&text2=${response[1]}`

conn.sendFile(m.chat, res, 'pubglogo.jpg', `done`, m, false)
}
}
