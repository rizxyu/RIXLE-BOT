let yts = require('yt-search')

module.exports = {
name: ["yts"],
type: ["searching"],
description: "mencari tautan video youtube",
utilisation: userbot.prefix + "yts",

async execute(m) {
let { conn, text } = data

if (!text) m.reply("*contoh:*" + userbot.prefix + "yts Aurora runaway")
let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
  }
}
/*
* MADE BY RIZKY
*/
