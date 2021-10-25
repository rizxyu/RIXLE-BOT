let fetch = require('node-fetch')

module.exports = {
 name: ['phlogo'],
 type: ['sticker'],
 description: "membuat stik pornhub logo",
 utilsation: userbot.prefix + "phlogo",
 
async execute(m) {
 let { text, conn, args } = data
 response = args.join(' ').split('|')
 if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/phlogo?text1=${response[0]}&text2=${response[1]}&apikey=apivinz`

conn.sendFile(m.chat, res, 'phlogo.jpg', `Nih kak`, m, false)
}
}
