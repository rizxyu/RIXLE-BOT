let fetch = require('node-fetch')

module.exports = {
name: ["harrypotter"],
    type: ['maker'],
    description: "make pubg logo",
    utilisation: global.userbot.prefix+ "harrypotter",
async execute(m) {
let { conn, text } = data
if (!text) return m.reply('teksnya mana?')
let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=harry-potter-logo&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=200&fillTextType=1&text=${text}`

conn.sendFile(m.chat, await (await fetch(res)).buffer(), 'fla.jpg', '@Rizxyu', m)

}
}
