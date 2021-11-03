module.exports = { 
name: "antilinkinstagram", //By @arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) { 
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
let babi = "https://instagram.com/";
let anjeng = "https://www.instagram.com/";

 if (m.text.includes(babi) && m.text.includes(anjeng)) {
 if (m.sender === conn.user.jid) return
 if (m.sender === isAdmin) return
m.reply(`Maaf @${m.sender.split("@")[0]} *Anti Link Instagram Terdeteksi!* \n_Maaf Anda Di Keluarkan._`)
await conn.groupRemove(m.chat, [m.sender])
}
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
