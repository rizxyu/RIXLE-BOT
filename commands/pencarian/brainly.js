let brainly = require("brainly-scraper")
module.exports = {
name: ["brainly"],
type: ['information'],
description: "menjawab pertanyaan kamu",
utilisation: global.userbot.prefix+ "brainly question",

async execute(m) {
let {conn, text} = data
if (!text) return m.reply("question?")

brainly(text).then(res => {
text = `${res}`
   m.reply(Ft.util.format(txt))
});
}
}
