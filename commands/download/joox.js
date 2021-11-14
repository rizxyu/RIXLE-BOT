const fs = Ft.fs
let fetch = require('node-fetch')

  module.exports = {
   name: ["joox"],
   type: ["download"],
   useLimit: true,
   description: "download audio dari joox dengan judul lagu",
   utilisation: userbot.prefix + "joox <judul>",

  async execute(m) {
    let { conn, text } = data
    if (!text) return m.reply("judulnya mana")
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${userbot.prefix + command} akad`
    let res = await fetch(global.API('pencarikode', '/download/joox', { search: text }, 'apikey'))
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, img_url, mp3_url, filesize, duration } = json.result
    let pesan = `*JOOX DOWNLOADER*
Judul: ${judul}
Artis: ${artist}
Album: ${album}
Ukuran File: ${filesize}
Durasi: ${duration}
    `.trim()
    conn.sendFile(m.chat, img_url, null, pesan, m, 0, { thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, mp3_url, null, null, m)
    console.log("⭕Fetching")
}
}

   const isUrl = (text) => {
     return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
   }
