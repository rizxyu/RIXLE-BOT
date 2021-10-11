
module.exports = {
name: ["servermc"],
type: ["information"],
description: "server in minecraff",
utilisation: userbot.prefix + "servermc",

async execute(m) {
mc = await require("../../Lib/scrape.js").servermc()
txt = `list server yang tersedia\n\n`
for (let i of mc) {
txt += `ip: ${i.ip}\n`
txt += `port: ${i.port}\n`
txt += `versi: ${i.versi}\n`
txt += `player: ${i.player}\n\n`
}
m.reply(txt.trim())
}
}