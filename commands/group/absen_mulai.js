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
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!\n\nketik *${usedPrefix}hapusabsen* untuk menghapus absen`.trim(), '© stikerin', 'Hapus', `${usedPrefix}hapusabsen`, conn.absen[id][0])
        throw false
    }
    conn.absen[id] = [
        await m.reply(`Absen dimulai silahkan ketik #absen`),
        [],
        text
    ]
}
}
