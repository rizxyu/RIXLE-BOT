const package = require('../../package.json')

module.exports = {
name: ["changelog"],
type: ["default"],
description: "changelog bot",
utilisation: userbot.prefix + "changelog",

async execute(m) {
let { conn, text } = data

let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

m.reply(`Changelog Bot
${date}

${userbot.chalog == '' ? 'Tidak ada' : '' || userbot.chalog }

_${package.name} ${package.version}_
*${package.description}*
`)

}
}
