let axios = require("axios");

module.exports = {
name: ["subreddit"],
type: ["searching"],
useLimit: true,
description: "subreddit",
utilisation: userbot.prefix + "subreddit",

async execute(m) {
let { conn, text } = data
try {
    let res = await axios.get(`https://meme-api.herokuapp.com/gimme/${text}`)
    if (res.status !== 200) throw await `${res.status} ${res.statusText}`;
    if (!res.data.url) throw res.data
    let caption = `
©Reddit
Author: ${res.data.author} Subreddit: ${res.data.subreddit}
${res.data.postLink}\n${res.data.title}
`.trim()
    conn.sendFile(m.chat, res.data.url, 'test.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}
}
