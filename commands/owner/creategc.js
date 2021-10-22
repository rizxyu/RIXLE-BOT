let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");

module.exports = {
name: ["buatgc"],
type: ["owner"],
owner: true,
description: "create grup",
utilisation: userbot.prefix + "buatgc",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
         await m.reply('create gc')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nRizxyu'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url + '\n\n*@FT-bot*')
       } catch (e) {
    m.reply('```Error```')
    console.log (e)
  }
}
}
