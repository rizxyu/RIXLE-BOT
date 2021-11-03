const fetch = require('node-fetch')

module.exports = {
 name: ['fflogo'],
 type: ['random'],
 description: "membuat logo pree pire",
 utilsation: userbot.prefix + "fflogo",
 
async execute(m) {
	let response = m.text
	if (!args) throw 'Masukkan Parameter'
	m.reply('*[] Sedang Dalam Proses...*')
	conn.sendFile(m.chat, `https://api.zeks.xyz/api/epep?text=${response}&apikey=MIMINGANZ`, null, userbot.author, m)
}
}
