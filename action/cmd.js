let fs = require('fs')

module.exports = {
async Command(conn, m) {
try {
const dftr = JSON.parse(fs.readFileSync('./db/daftar.json'))
let usedPrefix
if (typeof m.text !== 'string') m.text = ''
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {} || {}
let participants = m.isGroup ? groupMetadata.participants : [] || []
let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} 
let bot = m.isGroup ? participants.find(u => u.jid == conn.user.jid) : {} 
let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false
let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
let isOwner = userbot['owner'].map(v => v + '@s.whatsapp.net').includes(m.sender) || false
let isDaftar = dftr.includes(m.sender) || false //gabut ajah

global.dfail = (type, m, conn) => {
let msgnye = {
grup: global.userbot['setting'].group,
admin: global.userbot['setting'].admin,
botAdmin: global.userbot['setting'].botadmin,
user: global.userbot['setting'].jadibot,
owner: global.userbot['setting'].owner,
daftar: global.userbot['setting'].daftar,
}[type]
if (msgnye) return m.reply(msgnye)
}

let noPrefix = m.text.replace(global.prefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
commands = (command || '').toLowerCase()

global.data = {
conn,
args,
text,
command: commands
}
const sender = m.sender.split("@")[0]
for (i of Object.keys(Events)) {
if (!(i in global.db.data)) global.db.push("/" +i, 0)
}

for (i in db.data) {
if (!(i in global.Events)) {
db.delete("/" +i)
delete global.Events[i]
}
}



if (Public & !m.key.fromMe) return
const button = (Object.keys(m.message)[0] == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
if (m.quoted && m.quoted.sender == conn.user.jid && button) {
console.log("buttons cmd" + button )
await require("./button.js").execute.call(conn, m, {
this: conn,
button,
args,
text
})
}

for (i in global.Functions) {
type = global.Functions[i]
if (typeof type.functions !== "function") continue
await type.functions.call(conn, m, {
this: conn
})
}

for (i in Events) {
cmd = Events[i]
let custom = cmd.custom
if (!custom) continue
if (m.text.startsWith(cmd.name)) {
if (cmd.admin && !isAdmin) return dfail("admin", m, conn)
if (cmd.owner && !isOwner) return dfail("owner", m, conn)
if (cmd.daftar && !isDaftar) return dfail("daftar", m, conn)
if (cmd.botAdmin && !isBotAdmin) return dfail("botAdmin", m, conn)//Si paujan ketinggalan jadi gw tambahin
console.log(cmd.name)
await cmd.execute.call(conn, m, data)
}
}


for (let Commands in Events) {
Command = Events[Commands]
cmd = Array.isArray(Command.name) ? Command.name.some(cmd => cmd === global.command) : global.command.startsWith(Command.name)
if (!global.command) continue
if (!cmd) continue
if (Command.admin && !isAdmin) return dfail("admin", m, conn)
if (Command.owner && !isOwner) return dfail("owner", m, conn)
if (Command.daftar && !isDaftar) return dfail("daftar", m, conn)
if (Command.botAdmin && !isBotAdmin) return dfail("botAdmin", m, conn)
global.db.data[global.command] += 1
await Command.execute.call(conn, m, data)
 }
db.save()
} catch (e) {
console.log(e)
}
}
}
