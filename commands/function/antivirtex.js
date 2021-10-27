module.exports = { 
name: "antivirtex",  //@arifirazzaq2001

async functions(m) { 
let { conn } = data
if (m.message && m.quoted && m.text && m.text.length >= 10000) {
  let rojak = "\n".repeat(700) + "2020 - 2021 clear chat by Arifi Razzaq"
m.reply(`Maaf @${m.sender.split("@")[0]} *Virtex Terdeteksi!*\n_Maaf Anda Di Kick._`)
conn.groupRemove(m.chat, [m.sender])
m.reply(rojak)
}
}
}