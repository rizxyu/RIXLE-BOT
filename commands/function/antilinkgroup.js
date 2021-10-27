module.exports = { 
name: "antilinkgroup", //@arifirazzaq2001
admin: true,
botAdmin: true,
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async functions(m) { 
let { conn } = data
 if (!m.sender == conn.user.jid && m.text.includes("chat.whatsapp.com") {
await sleep (4000) 
m.reply("Maaf Anda Di Keluarkan")
await conn.groupRemove(m.chat, [m.quoted.sender])
}
}
}


