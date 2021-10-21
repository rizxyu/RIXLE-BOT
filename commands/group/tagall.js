
module.exports = {
name: ["tagall"],
type: ["group"],
description: "tag",
admin: true,
utilisation: "#tagall",
async execute(m) {
let { conn, text } = data

if (!text) return m.reply('Where text')
conn.fetchGroupMetadataFromWA(m.chat).then(({ participants }) => {
let a = "\n\n"
for (i of participants){
a += `@${i.jid.split("@")[0]}\n`
}
m.reply(`*TAGALL*\n\nInfo: ${text}\n\n${a}`)
})
}
}
