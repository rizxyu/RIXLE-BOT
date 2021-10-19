
module.exports = {
name: ["tagall"],
type: ["group"],
description: "tag",
admin: true,
utilisation: "#tagall",
async execute(m, member) {
let { conn, text } = data

if (!text) return m.reply('Where text')
let users = member.participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
}
