const fetch = require('node-fetch')

module.exports = {
  name: ["wallq"],
  type: ["searching"],
  useLimit: true,
  description: "Searching wallpaper with text",
  utilisation: userbot.prefix + "wallq <text>",

  async execute(m) {
    let { conn, text } = data
    if (!text) return m.reply('Nyari apa?')
    let res = await fetch(global.API('https://wall.alphacoders.com/api2.0', '/get.php', {
      auth: '3e7756c85df54b78f934a284c11abe4e',
      method: 'search',
      term: text
    }))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if(json.total_match == 0) return m.reply(`Tidak dapat menemukan \"${text}\"!`)
    let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
    await conn.sendFile(m.chat, img.url_image, null, `Nih kak ${conn.getName(m.sender)}, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
  }
}
