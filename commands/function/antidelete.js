module.exports = { 
name: "antidelete", //By @arifirazzaq2001 Fixed by Ivanzz`
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
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 

if (global.antidelete) {
conn.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
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
