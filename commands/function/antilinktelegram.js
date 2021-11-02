module.exports = { 
name: "antilinktelegram", //By @arifirazzaq2001
async functions(m) { 
const gMdata = m.isGroup ? await conn.groupMetadata(from) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
 if (m.message || m.text.includes("t.me")) {
 if (m.sender === conn.user.jid) return
 if (m.sender === isAdmin) return
m.reply(`Maaf @${m.sender.split("@")[0]} *Anti Link Telegram Terdeteksi!* \n_Maaf Anda Di Keluarkan._`)
await conn.groupRemove(m.chat, [m.sender])
}
}
}

function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
