module.exports = {
name: ["cekabsen"],
type: ["group"],
description: "cek absen",
utilisation: "#cekabsen",
async execute(m) {
let { conn } = data
let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await m.reply(`Tidak ada absen berlangsung digrup ini!\n\nketik *${userbot.prefix}mulaiabsen* untuk memulai absen`)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
    
┌〔 daftar absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────`.trim()
    await m.reply(caption)
}
}
