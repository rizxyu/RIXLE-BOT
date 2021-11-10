let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let fetch = Ft.fetch
const Canvas = require("discord-canvas")
const uploadImage = require('../../Lib/uploadImage')


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
async groupUpdate({jid, participants, action}) {
console.log("member yang bergabung " + participants[0].split("@")[0])
const groupM = await conn.groupMetadata(jid)
const mem = participants[0]

switch (action) {
  case "remove":
   let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-EY2K9fA93qJM3wF1lPfYMYI6IXF9fkGyR4F43fpRon796thPr4I2KPb&s=10'
    try {
    img = await conn.getProfilePicture(mem) //ribet amat harus buf terus di up, padahal udh url
            } catch (e) {
            console.log(e) 
            } finally {
let image = await new Canvas.Goodbye()
  .setUsername(`${await conn.getName(mem)}`)
  .setDiscriminator(`${groupM.participants.length}`)
  .setMemberCount(`${groupM.participants.length}`)
  .setGuildName(`${groupM.subject}`)
  .setAvatar(`${img}`)
  .setColor("border", "#000000")
  .setColor("username-box", "#000000")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#000000")
  .setColor("title", "#ffffff")
  .setColor("avatar", "#000000")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBCkFVUY0nJxj1DPqtvAwrf7qfvj6e-Rv-A&usqp=CAU")
  .toAttachment();
 buff = await image.toBuffer()
teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject}`
 conn.sendButImg(jid, buff, teks, userbot.packname, 'Selamat tinggal', 'say goodbye', false, { contextInfo: {"mentionedJid": conn.parseMention(teks)}})
    }
    
 break
   case "add":
   let imeg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-EY2K9fA93qJM3wF1lPfYMYI6IXF9fkGyR4F43fpRon796thPr4I2KPb&s=10'
    try {
    imeg = await conn.getProfilePicture(mem)
            } catch (e) {
            console.log(e) 
            } finally {
let imaged = await new Canvas.Welcome()
  .setUsername(`${await conn.getName(mem)}`)
  .setDiscriminator(`${groupM.participants.length}`)
  .setMemberCount(`${groupM.participants.length}`)
  .setGuildName(`${groupM.subject}`)
  .setAvatar(`${imeg}`)
  .setColor("border", "#000000")
  .setColor("username-box", "#000000")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#000000")
  .setColor("title", "#ffffff")
  .setColor("avatar", "#000000")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7c3n7snGnpzS676fXaU2yxSjGsFNrCURXw&usqp=CAU")
  .toAttachment();
 buff = await imaged.toBuffer()
 teks = `@${mem.split("@")[0]} Bergabung dalam Group ${groupM.subject}`
 conn.sendButImg(jid, buff, teks, userbot.packname, 'Selamat datang', 'welcome', false, { contextInfo: {"mentionedJid": conn.parseMention(teks)}})
    }
    
 break
}
}
}
