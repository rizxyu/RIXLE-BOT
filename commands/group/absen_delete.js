module.exports = {
name: ["dabsen"],
type: ["group"],
description: "delete absen",
utilisation: "#dabsen",
async execute(m) {
let { conn, text } = data

let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await m.reply(`Tidak ada absen berlangsung digrup ini!\n\nketik *${userbot.prefix}mulaiabsen* untuk memulai absen`)
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absen dihapus`)
}
}
