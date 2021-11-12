let fs = require('fs')

module.exports = { 
name: "afk", 

async functions(m) {
let { conn } = data
let json = JSON.parse(fs.readFileSync('./db/afk.json'))
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

for (let jid of jids) {
if (json.includes(who.split`@`[0])) continue 
m.reply(`jangan tag dia!! `)
}
return true
}
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
