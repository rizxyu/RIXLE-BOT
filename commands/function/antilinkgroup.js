module.exports = { 
name: "antilinkgroup", //@arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) { 
let { conn } = data
 if (m.message && m.quoted && m.text.includes("chat.whatsapp.com")) {
 if (m.sender == this.user.jid) return false
m.reply("*Anti Link Group Terdeteksi!* \n_Maaf Anda Di Keluarkan._")
await conn.groupRemove(m.chat, [m.quoted.sender])
}
}
}
