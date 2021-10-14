module.exports = {
name: ["absen"],
type: ["group"],
description: "absen",
utilisation: "#absen",
async execute(m) {
let { conn, text } = data
let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await m.reply(`_*Tidak ada absen berlangsung digrup ini!*_\n\nketik *${userbot.prefix}mulaiabsen* untuk memulai absen`)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) return m.reply('*Kamu sudah absen!*')
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}

┌〔 daftar absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────

@_Rizxyu`.trim()
    await m.reply(caption)

}
}
