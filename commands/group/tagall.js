
module.exports = {
name: ["tagall"],
type: ["group"],
description: "tag",
utilisation: "#tagall",
async execute(m) {
let { conn, text, participants } = data

if (!text) return m.reply('Where text')
let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
}
