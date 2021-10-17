module.exports = {
name: ["stop"],
type: ["session"],
description: "stop jadi bot",
utilisation: "#stop",
async execute(m) {
let { conn, text } = data
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kamu tidak jadi bot!?', m)
  else {
    await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.close()
  }
}
}
