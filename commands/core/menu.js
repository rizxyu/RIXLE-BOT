const tags = {}
const fetch = require("node-fetch")
const speed = global.Ft['speed']

const os = global.Ft['os']

module.exports = {
name: ["menu"],
type: ["default"],
description: "menampilkan command",
utilisation: "#menu",
async execute(m) {
const me = conn.user.name
uptime = process.uptime();
timestamp = speed();
const name = conn.getName(m.sender)

let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

const rawwr = Object.keys(global.Events)

const menu = {

before: `┌────⌈ *${me}* ⌋
*├ Name:* ${name}
*├ Runtime:* ${count(uptime)}
*├ Uptime:* ${count(os.uptime())}
*├ Hostname:* ${os.hostname()}
*├ clock:* ${time}
*├ calender islam:* ${dateIslamic}
*├ calender Java:* ${week} ${weton} ${date}`.trimStart(),
type: "┌────⌈ *#type* ⌋",
after: "*BOT DALAM PENGEMBANGAN*"
}

let raw = Object.values(global.Events).map(v => {
return {
help: Array.isArray(v.type) ? v.name : [v.name],
type: Array.isArray(v.type) ? v.type : [v.type],
}
})
for (let p of raw)
if (p && 'type' in p)
for (let i of p.type)
if (!(i in tags) && i) tags[i] = i
let before = menu.before
let type = menu.type
let after = menu.after

text = [
before,
...Object.keys(tags).map(v => {
return type.replace(/#type/g, tags[v]) + ("\n") + [
...raw.filter(menu => menu.type && menu.type.includes(v) && menu.help).map(menu => {
return "├ " + userbot.prefix + menu.help
})].join("\n")
}),
after
].join("\n└────────────\n\n")

text += `\n\njika tidak tahu menggunakan command, format ${userbot.prefix}help command. contoh ${userbot.prefix}help ${random(rawwr)}`
text += ``
conn.sendButtonLoc(m.chat, await (await fetch('https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=star-wars-logo&doScale=true&scaleWidth=850&scaleHeight=400&fontsize=90&fillTextType=1&text=List%20Menu')).buffer(), text, `Special Thanks To:
-Allah SWT
-FearTeam
-Adhiraj Singh(adiwajshing)
-All Creator Bot
-Nurutomo
github:
https://github.com/Rizxyu/Tes-bot1`, `creator`, `y`, m)
}
}

function random(ext) {
return ext[Math.floor(Math.random () * ext.length)]
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

