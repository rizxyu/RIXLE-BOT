let { GroupSettingChange } = require(global.baileys)
let util = Ft.util
module.exports = {
name: "group",
type: ['setting'],
admin: true,
botAdmin: true,
description: "menutup dan membuka grup(hanya boleh dilakukan ketika anda menjadi admin)",
utilisation: global.userbot.prefix+ "group open/close",

async execute(m) {
let { conn, args } = data
switch (args[0]) {
case 'open': case 'buka':
 anu = await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
Res(anu)
break

case 'tutup': case 'close':
 anu = await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
 Res(anu)
break
}
}
}


function Res(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
var parse = util.format(objectPromise)
}
return parse
}