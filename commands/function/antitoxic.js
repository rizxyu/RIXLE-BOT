module.exports = { 
name: "antitoxic",  
async functions(m) { 
let { conn, text } = data
let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i 

let name = conn.getName(m.sender)
//if (m.isBaileys && m.fromMe) return  false
let isBadword = badwordRegex.exec(m.text)

if (!isBadword) {
m.reply( name + 'Terdeteksi Menggunakan bahasa kotor, Kami hanya memberi mu warn\n@0')
}
//return false
}
}
