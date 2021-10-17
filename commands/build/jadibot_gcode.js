module.exports = {
name: ["getcode"],
type: ["session"],
description: "get code jadibot",
utilisation: "#getcode",
async execute(m) {
let { conn } = data
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Perintah ini hanya untuk yang jadi bot', m)
  else global.conn.reply(conn.user.jid, `${userbot.prefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
}
