module.exports = {
name: ["mulaiabsen"],
type: ["group"],
description: "absen",
utilisation: "#mulaiabsen",
async execute(m) {
let { conn, text } = data
conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!`, userbot.packname, 'Mulai', 'absenm', {quoted: m})
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai !!!`, userbot.prefix, 'Cekabsen', 'absenc', { quoted: m} ),
        [],
        text
    ]
}
}
