const { servers, yta, ytv } = require('../../Lib/y2mate')
const fetch = require('node-fetch')
let yts = require('yt-search')

module.exports = { 
name: "autodownlaod", 
async functions(m) {
let { conn } = data

if (/^https?:\/\/.*youtu/i.test(m.text)) {
        let results = await yts(m.text)
        let vid = results.all.find(video => video.seconds < 3600)
        if (!vid) return m.reply('Video/Audio Tidak ditemukan')
        let yt = false
        let usedServer = servers[0]
        for (let i in servers) {
            let server = servers[i]
            try {
                yt = await yta(vid.url, server)
                yt2 = await ytv(vid.url, server)
                usedServer = server
                break
            } catch (e) {
                m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
            }
        }
        if (yt === false) return m.reply(eror)
        if (yt2 === false) return m.reply(eror)
        let { dl_link, thumb, title, filesize, filesizeF } = yt
        await this.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}

Untuk memotong Audio ${userbot.prefix}cut detik detik
`.trim(), userbot.botwm , 'video', `video ${vid.url}`)
    }
}
}
