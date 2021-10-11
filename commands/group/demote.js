module.exports = {
name: ["demote"],
type: ['setting'],
admin: true,
botAdmin: true,
description: "menjadikan admin member(hanya boleh dilakukan ketika anda menjadi admin)",
utilisation: global.userbot.prefix+ "demote tag/reply",

async execute(conn, m) {
if (m.quoted && m.quoted.sender) {
per = await conn.groupMakeAdmin(m.chat, [m.quoted.sender])
teks = `Members @${m.quoted.sender.split('@')[0]} succes promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[m.quoted.sender]}})
} else {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Tag atau m.reply target yang ingin di jadikan admin!')
ment = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
per = await conn.groupMakeAdmin(m.chat, [ment])
teks = `Members @${ment.split('@')[0]} succes promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[ment]}})
}
}
}
