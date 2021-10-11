module.exports = {
name: ["promote"],
type: ['setting'],
description: "menjadikan member menjadi admin(hanya boleh dilakukan ketika anda menjadi admin)",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "promote",

async execute(conn, m) {
if (m.quoted && m.quoted.sender) {
per = await conn.groupMakeAdmin(m.chat, [m.quoted.sender])
teks = `Members @${m.quoted.sender.split('@')[0]} succes promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[m.quoted.sender]}})
return per
} else {
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Tag atau m.reply target yang ingin di jadikan admin!')
ment = m.message.extendedTextMessage.contextInfo.mentionedJid[0]
per = await conn.groupMakeAdmin(m.chat, [ment])
teks = `Members @${ment.split('@')[0]} succes promote`
conn.sendMessage(m.chat, teks, mediaType.text, {quoted:m, contextInfo:{mentionedJid:[ment]}})
return per
}
}
}