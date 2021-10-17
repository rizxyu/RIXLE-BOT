module.exports = {
name: ["listjadibot"],
type: ["session"],
description: "view list jadi bot",
utilisation: "#listjadibot",
async execute(m) {
let { conn } = data
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${userbot.prefix}menu (${v.name})`).join('\n'))
}
}
