module.exports = {
async Command(conn, m, chatsUpdate) {

try {
let usedPrefix
if (typeof m.text !== 'string') m.text = ''
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {} || {}
let participants = m.isGroup ? groupMetadata.participants : [] || []
let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} 
let bot = m.isGroup ? participants.find(u => u.jid == conn.user.jid) : {} 
let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false
let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
let isOwner = userbot['owner'].map(v => v + '@s.whatsapp.net').includes(m.sender) || false
global.dfail = (type, m, conn) => {
let msgnye = {
grup: global.userbot['setting'].group,
admin: global.userbot['setting'].admin,
botAdmin: global.userbot['setting'].botadmin,
user: global.userbot['setting'].jadibot,
owner: global.userbot['setting'].owner,
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


cmd = global.Events ? global.Events[global.command] : ''
if (cmd) {
if (cmd.admin && !isAdmin) return dfail("admin", m, conn)
if (cmd.owner && !isOwner) return dfail("owner", m, conn)
if (cmd.botAdmin && !isBotAdmin) return dfail("botAdmin", m, conn)
global.db.data[global.command] += 1
await cmd.execute.call(conn, m, data)
 }
db.save()
} catch (e) {
console.log(e)
}
}
}
