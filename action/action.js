let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let fetch = Ft.fetch
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
try {
let img = Ft.getBuffer(await vanz.getProfilePicture(mem))
} catch {
img = await (await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1pVfdb1zUoSve4Unc08jl5BpCHwfys8qxA&usqp=CAU')).buffer()
}
switch (action) {
case 'remove': 
teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject}`
conn.sendMessage(member.jid, teks, MessageType.text, {thumbnail: img,
contextInfo: {"mentionedJid": conn.parseMention(teks)}})
break
case 'add' : 
teks = `@${mem.split("@")[0]} Bergabung ke Dalam Group ${groupM.subject}`
conn.sendMessage(member.jid, teks, MessageType.text, {thumbnail: img,
contextInfo: {"mentionedJid": conn.parseMention(teks)}})
break
}
}
}


