const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["vn"],
type: ["media"],
useLimit: true,
description: "addvn cuy",
utilisation: userbot.prefix + "addvn nama + reply",

async execute(m) {
let { conn, args, text } = data

if (!args[0]) return m.reply(`
List command Vn:
- add
- del
- list

Penggunaan
${userbot.prefix + command} add (text|reply)
`)

switch (args[0]) {

   case "add":
   if(!m.quoted) return m.reply("Tag audionya!")
   if(m.quoted.mtype && m.quoted.mtype != "audioMessage") return m.reply("Target bukan audio!")
   if(!args[1]) return m.reply("Masukan nama file!")

   if(m.quoted && m.quoted.mtype && m.quoted.mtype == "audioMessage" && m.quoted.download) {
    var audio = await m.quoted.download()
    fs.createWriteStream("./audio/" + args[1] + ".mp3")
    fs.writeFileSync("./audio/" + args[1] + ".mp3", audio)
    if(fs.existsSync("./audio/" + args[1] + ".mp3")) {
      m.reply("Berhasil!")
    } else {
      m.reply("Gagal!")
     } 
    } else {
     m.reply("eror")
    }
    break

   case "del": 
  if(fs.readdirSync("./audio/").length == 0) return m.reply("Tidak ada audio!")
  if(!args[1] || args[1].length == 0) {
    var str = "Tersedia :\n\n"
    str += fs.readdirSync("./audio/").join("\n").split(".mp3").join("")
    m.reply(str)
  } else {
    if(!fs.existsSync("./audio/" + args[1] + ".mp3")) return m.reply("File tidak ditemukan!")
    fs.unlinkSync("./audio/" + args[1] + ".mp3")
    m.reply("Berhasil!")
  }

    break

   case "get":
  if(fs.readdirSync("./audio/").length == 0) return m.reply("Tidak ada audio!")
  if(!args[1] || args[1].length == 0) {
    var str = "Tersedia :\n\n"
    str += fs.readdirSync("./audio/").join("\n").split(".mp3").join("")
    m.reply(str)
  } else {
    if(!fs.existsSync("./audio/" + args[1] + ".mp3")) return m.reply("File tidak ditemukan!")
    conn.sendFile(m.chat, "./audio/" + args[1] + ".mp3", null, null, m)
  }
   break

   case "list":
  if(fs.readdirSync("./audio/").length == 0) return m.reply("Tidak ada audio!")
  var str = "List audio :\n\n"
  str += fs.readdirSync("./audio/").join("\n").split(".mp3").join("")
  m.reply(str)
   break
  } 
}
}
        
