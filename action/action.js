let { MessageType } = require("@adiwajshing/baileys")
module.exports = {
async battery(json) {
let battery = json[2][0][1].value
let persenbat = parseInt(battery)
battrey.value = `${persenbat}%`
battrey.live = json[2][0][1].live
global.battery = ({
value: battrey.value,
isCharge: battry.live
})
}
}

module.exports = {
async groupUpdate(member) {
if (antidelete == false) return
console.log(member)
let button = async(jid, text1, desc1, but = [], options = {}) => {
const buttonMessages = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(jid, buttonMessages, MessageType.buttonsMessage, options)
}
let but = [
{buttonId: 'NGAPAIN INSPECT?', buttonText: {displayText: 'SAYONARAA'}, type: 1},
{buttonId: 'NGAPAIN INSPECT?', buttonText: {displayText: 'SAYONARAA'}, type: 1} 
]
let groupM = await conn.groupMetadata(member.jid)
let mem = member.participants[0]
let action = member.action
switch (action) {
case 'remove':
button(member.jid,`member yang keluar @${mem.split("@")[0]} dari group ${groupM.subject}`,`@Group Remove`, but, {
contextInfo: {
mentionedJid: mem
}
}
)
break
}
}
}


