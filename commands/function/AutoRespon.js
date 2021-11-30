module.exports = { 
name: "autorespon", 
async functions(m) {
let { conn } = data

try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
       conn.send2Button(m.chat, `Halo ${conn.getName(m.sender)} Ada yang Bisa saya Bantu?`, userbot.packname, `❌ Tidak`, `butno`, `✔️ Iya`, `butya`, {quoted: m})
        }
    } catch (e) {
        return
    }

if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
       m.reply(`*INGIN MENGUNDANG BOT KE GRUP ANDA?*\nIzin Ke Owner Dulu ya!\nJangan Lupa Donasi Bot Biar on terus`)
      conn.sendContact(m.chat, userbot.owner[0], "CREATOR BOT", m).then(() => {
conn.reply(userbot.owner[0] + "@s.whatsapp.net", "Seseorang Mengirim Undangan Grup", null)
})
}
}
}
