let brainly = require("brainly-scraper")
module.exports = {
name: ["brainly"],
type: ['searching'],
description: "menjawab pertanyaan kamu",
utilisation: global.userbot.prefix+ "brainly question",

async execute(m) {
let {conn, text} = data
if (!text) return m.reply("question?")

let res = await brainly(text)
let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
m.reply(answer)
}
}
