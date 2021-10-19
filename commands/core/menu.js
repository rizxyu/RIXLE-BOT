const fetch = require('node-fetch')
      speed = global.Ft['speed']
      os = global.Ft['os']
      fs = Ft.fs,
      moment = require('moment-timezone')

module.exports = {
name: ["menu"],
type: ["default"],
useLimit: true,
description: "list menu button",
utilisation: userbot.prefix + "menu",

async execute(m) {
let { conn, text } = data

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
    let name = conn.getName(m.sender)
    uptime = process.uptime();
    timestamp = speed();
    let me = conn.user.me
let capt = `
*${me}*

HELLO ${name} ${ucapan()}

* Ｂｏｔ ｓｔａｔｕｓ:*
*Runtime:* ${count(uptime)}
*Speed:* ${count(timestamp)}
*Host:* ${os.hostname()}
*Total Feature:* ${Object.keys(Events).length}

* Ｓｔａｔｕｓ ｏｔｈｅｒ:*
*Islam Calender:* ${dateIslamic}
*calender:* ${week} ${weton} ${date}
`

m.reply('Getting data to view Menu')
conn.send2ButtonLoc( m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7EnNkFf8-jer8k6eT_gd9butzTdl-s91uPaEhL-ggw3-h8T90x-h8Z66&s=10')).buffer(), capt, userbot.packname, `LIST MENU`, `menu`, `Rules`, `rules`, m)

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

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Good Morning🌄"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
