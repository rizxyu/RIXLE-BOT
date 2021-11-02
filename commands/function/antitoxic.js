module.exports = { 
name: "antitoxic",  
async functions(m) { 
let { conn, text } = data
let badwordRegex = /anjing,kontol,anj,asu,asw,pantek,memek/

let name = conn.getName(m.sender)
if (m.isBaileys && m.fromMe) return  !0
let isBadword = badwordRegex.exec(m.text)

if (!isBadword) {
m.reply(m.mention+'Terdeteksi Menggunakan bahasa Toxic')
}
return !0
}
}
