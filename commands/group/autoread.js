module.exports = {
name: ["autoread"],
type: ['group'],
description: "bot membaca chat group",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "autoread on/off",

async execute(m) {
let { conn, args } = data

switch (args[0]) {
case 'on': case 'aktif':
await conn.chatRead(m.chat).catch(() => { })
break

case 'off': case 'mati':
//:V g tau lagi
break
   }
}
}
