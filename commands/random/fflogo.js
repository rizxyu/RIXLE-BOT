const fetch = require('node-fetch')

module.exports = {
 name: ['fflogo'],
 type: ['random'],
 description: "membuat logo pree pire",
 utilsation: userbot.prefix + "fflogo",
 
async execute(m) {
 let { text, conn, args } = data

	response = args.join(' ')
	if (!args) throw 'Masukkan Parameter'
	m.reply('*[] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
	conn.sendFile(m.chat, `https://api.zeks.xyz/api/epep?text=${response}&apikey=MIMINGANZ`, 'epep.jpg', `Nih Mhank epep burik`, m)
}
}
