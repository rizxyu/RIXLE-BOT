let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

module.exports = { 
name: "autojoin", 
async functions(m) {
let { conn } = data

if (/^https?:\/\/.*chat.whatsapp/i.test(m.text)){
let [_, code] = m.text.match(linkRegex) || []
    if (!code) return m.reply('Link invalid')
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
 }
}
}//Anu Donate dong om
