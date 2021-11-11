module.exports = {
name: ["antidelete"],
type: ["owner"],
owner: true,
description: "hmmm",
utilisation: userbot.prefix + "antidelete",

async execute(m) {
let { conn, text } = data

try {
global.antidelete = true
m.reply(`${global.antidelete}`)
} catch (e) {
console.log("eror Banh")
  }
}
}
