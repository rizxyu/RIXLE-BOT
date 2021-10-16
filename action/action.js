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
console.log(member)
let groupM = await conn.groupMetadata(member.jid)
let mem = member.participants[0]
let action = member.action
switch (action) {
case 'remove': {
conn.sendMessage(member.jid,`member yang keluar @${mem.split("@")[0]} dari group ${groupM.subject}`,MessageType.text, {
contextInfo: { mentionedJid: mem}})
}
break
}
}
}


