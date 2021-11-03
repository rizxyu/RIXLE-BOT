module.exports = { 
name: "antilinktelegram", //By @arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) {
let { conn } = data
const botNumber = conn.user.jid
const gMdata = m.isGroup ? await conn.groupMetadata(m.chat) : ''
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
const groupMembers = m.isGroup ? gMdata.participants : ''
const groupAdmins = m.isGroup ? getGroupAdmin(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(m.sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber)

 if (m.text.includes("t.me/")) {
 if (m.sender === conn.user.jid) return
 if (m.sender === isAdmin) return
 if (isGroupAdmins) return // Melewati Transisi Ketika Detected Suatu Grup Yang Bukan Admin
 if (!isBotGroupAdmins) return //Detect Clone Bot Harus Admin
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
} // Full Fix Cok Jangan Di Edit Lagi! By @arifirazzaq2001
