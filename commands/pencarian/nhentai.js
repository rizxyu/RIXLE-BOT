const nhentai = require('nhentai')
const api = new nhentai.API()

module.exports = {
name: ["nhentai"],
type: ["anime"],
description: "search nhentai",
utilisation: userbot.prefix+"nhentai",

async execute(m){
let { conn, text } = data
if (!text) return m.reply('masukkan kode nhentai')

api.fetchDoujin(text).then(doujin => m.reply(`
🔖Title: ${doujin.titles.pretty}
🔗Page url: ${doujin.pages[0].url}
🖼️Cover url: ${doujin.cover.url}
#️⃣tag: ${doujin.tags.all.map(tag => tag.name).join(', ')}
`))

}//Kalo eror dimaklumi
}
