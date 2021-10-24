let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let fetch = Ft.fetch
const Canvas = require("discord-canvas")
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
let groupM = await conn.fetchGroupMetadataFromWA(member.jid)
let mem = member.participants[0]
let action = member.action
let img = conn.getProfilePicture(mem)
.catch(e => {
img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CGh88WwR8hAX_NKjKC_WrOOzT-cVnGsw34DgCji_TEIPJaIl1Hbkeia5&s=10'
})
switch (action) {
case 'remove': 
let image = await new Canvas.Goodbye()
  .setUsername(encodeURI(await conn.getName(mem)))
  .setDiscriminator(groupM.participants.length)
  .setMemberCount(groupM.participants.length)
  .setGuildName(encodeURI(groupM.subject))
  .setAvatar(img)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOP9RorHQ1OkTW0uYmOkNkBOkvIreWirvug&usqp=CAU")
  .toAttachment();
  teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject}`
conn.sendFile(member.jid, mage.toBuffer(), "wel.jpg", teks, {contextInfo: {"mentionedJid": conn.parseMention(teks)}})
break
case 'add' : 
let mage = await new Canvas.Welcome()
  .setUsername(encodeURI(await conn.getName(mem)))
  .setDiscriminator(groupM.participants.length)
  .setMemberCount(groupM.participants.length)
  .setGuildName(encodeURI(groupM.subject))
  .setAvatar(img)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOP9RorHQ1OkTW0uYmOkNkBOkvIreWirvug&usqp=CAU")
  .toAttachment();
  teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject}`
conn.sendFile(member.jid, mage.toBuffer(), "wel.jpg", teks, {contextInfo: {"mentionedJid": conn.parseMention(teks)}})
break
}
}
}

