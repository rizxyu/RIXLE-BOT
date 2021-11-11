module.exports = {
name: ["antidelete"],
type: ["owner"],
owner: true,
description: "hmmm",
utilisation: userbot.prefix + "antidelete",

async execute(m) {
let { conn, args } = data

switch (args[0]) {
case "on": 
global.antidelete = true
m.reply(`${global.antidelete}`)
console.log("[?] true")
break

case "off": 
global.antidelete = false
m.reply(`${global.antidelete}`)
console.log("[?] false")
break
  }
}
}
