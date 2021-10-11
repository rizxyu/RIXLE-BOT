const { exec } = require('child_process')

module.exports = {
name: ["exec"],
description: "ntahlah gw ga tau deskripsi nya",
owner: true,
utilisation: userbot.prefix + "exec <code>",
type: ["owner"],
execute(m) {
let message = m.text
text = message.slice(6)
exec(text, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
}