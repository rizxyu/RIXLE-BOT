module.exports = {
 name: ['fflogo'],
 type: ['random'],
 description: "membuat logo pree pire",
 utilsation: userbot.prefix + "fflogo",
 
async execute(m) {
	let text = m.text
	if (!text) m.reply('Masukkan Teks')
	m.reply('*[] Sedang Dalam Proses...*')
	conn.sendFile(m.chat, `https://api.zeks.xyz/api/epep?text=${text}&apikey=MIMINGANZ`, null, userbot.author, m)
}
}
