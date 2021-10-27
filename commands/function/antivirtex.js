module.exports = { 
name: "antivirtex", //@arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) { 
let { conn } = data
if (m.text && m.text.length >= 7000) {
if (m.sender == this.user.jid) return false
m.reply(`Maaf @${m.sender.split("@")[0]} *Virtex Terdeteksi!*\n_Maaf Anda Di Kick._`)
await conn.groupRemove(m.chat, [m.sender])
m.reply(Ft.Res("\n".repeat(700) + "2020 - 2021 clear chat by Arifi Razzaq"))
}
}
}
