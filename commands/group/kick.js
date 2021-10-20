module.exports = {
name: ["kick"],
type: ['group'],
description: "menendang member grup(hanya boleh dilakukan ketika anda menjadi admin)",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "kick",

async execute(m) {
let { conn } = data
if (m.quoted.sender === conn.user.jid) return m.reply('tidak dapat menendang diri sendiri')
fz = await conn.groupRemove(m.chat, [m.quoted.sender])
}
}
