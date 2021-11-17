let fetch = require('node-fetch')

module.exports = {
name: ["meme"],
type: ["random"],
useLimit: true,
description: "meme from redit",
utilisation: userbot.prefix + "meme",

async execute(m) {
let { conn } = data
try {
    let res = await fetch('https://meme-api.herokuapp.com/gimme')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©Reddit
Author: ${json.author} Subreddit: ${json.subreddit}
${json.postLink}
`.trim()
    conn.sendFile(m.chat, json.url, 'test.jpg', caption, m, 0, { thumbnail: Buffer.alloc(0) })
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}
}
