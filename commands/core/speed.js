const speed = global.Ft['speed']
const os = global.Ft['os']
const fetch = require('node-fetch')

module.exports = {
name: ["stats", "runtime", "speed", "runtime"],
type: ['default'],
description: "melihat kecepatan respon bot",
utilisation: global.userbot.prefix+ "speed",

async execute(m) {
let { conn } = data
let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
let privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
let ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await conn.chats.all()
latensi = speed() - timestamp
let total = Math.floor(`${groups.length}*${privat.length}`)
stats = `
*_Bot Stats_*
*› Group Chats :* ${groups.length}
*› Private Chats :* ${privat.length}
*› Total Chats :* ${totalChat.length}
*› Speed :* ${latensi.toFixed(4)} ms
*› Runtime :* ${count(uptime)}
*› Mode :*${global.Public == true ? 'SELF/SENDIRI' : '' || global.Public == false ? 'PUBLIK' : ''}

*_Phone Stats_*
*› Batterai:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Ｃｈａｒｇｉｎｇ' : '⚡ Discharging' }` : '_♻️Mengambil data_'}
*› Penggunaan Ram :* ${ram2}
*› Platform :* ${os.platform()}
*› Hostname :* ${os.hostname()}
*› Uptime :* ${count(os.uptime())}
*› Wa Version:* ${conn.user.phone.wa_version}
*› Os Version:* ${conn.user.phone.os_version}
*› Device Model:* ${conn.user.phone.device_model}
`
conn.sendButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWisuGQ2p4DQFvXa1eWhUhfu9lcyRxHXa1OQ&usqp=CAU')).buffer(),  stats, userbot.packname, 'Menu', 'menu', m)


}
}

function count(seconds){
if (typeof seconds !== "number") throw "connError: Unexpected Param " + typeof seconds
let hours = Math.floor(seconds / (60*60));
let minutes = Math.floor(seconds % (60*60) / 60);
let second = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(second)} Detik`
}
function pad(s) {
return (s < 10 ? '0' : '') + s;
}

