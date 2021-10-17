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
case 'add': {
teks = `member @${mem.split("@")[0]} bergabung ke group ${groupM.subject}`
conn.sendMessage(member.jid, teks, MessageType.text, {
contextInfo: { mentionedJid: teks}})
}
break
case 'remove': {
teks = `member yang keluar @${mem.split("@")[0]} dari group ${groupM.subject}`
conn.sendMessage(member.jid, teks, MessageType.text, {
contextInfo: { mentionedJid: teks}})
}
break
}
}
}


