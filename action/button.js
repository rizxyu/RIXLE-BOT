const { MessageType }= require('@adiwajshing/baileys'),
      { contactsArray } = MessageType,
      fs = Ft.fs,
      { servers, yta, ytv } = require("../Lib/y2mate.js")
      fetch = require('node-fetch')
      tags = {}
      speed = global.Ft['speed']
      os = global.Ft['os']
      tiktok = require("../../Lib/scrape.js").tiktok
      tiktokmusic = require("../../Lib/scrape").tiktokmusic

module.exports = {
async execute(m, {button, args, text }) {
let { conn } = data

try {
switch (button.split(" ")[0].toLowerCase()) {
   case "absenm":
   conn.absen = conn.absen ? conn.absen : {}
    id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!\n\nketik *${usedPrefix}hapusabsen* untuk menghapus absen`.trim(), userbot.packname, 'Hapus absen', `absend`, conn.absen[id][0])
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, 'Absen Dimulai', userbot.prefix, 'Cekabsen', 'absenc', { quoted: m } ),
        [],
        text
    ]
   break;

   case "absen":
    id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!`, userbot.packname, 'Mulai', 'absenm', {quoted: m})
        throw false
    }

    absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) return m.reply('*Kamu sudah absen!*')
    absen.push(m.sender)
     
    list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
     caption = `
${conn.absen[id][2]}
┌〔 daftar absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────`.trim()
    await conn.sendButton(m.chat, caption, userbot.prefix, 'Cekabsen', 'absenc', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(caption)}} )
   break;

   case "absend":
   id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!`, userbot.packname, 'Mulai absen', 'absenm', {quoted: m})
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absen dihapus`)
   break;

   case "absenc":
    id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!`, userbot.packname, 'Mulai absen', 'absenm', {quoted: m})
        throw false
    }

    absen = conn.absen[id][1]
    list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    caption = `
${conn.absen[id][2]}
    
┌〔 daftar absen 〕
│ 
├ Total: ${absen.length}
${list}
│ 
└────`.trim()
    await conn.send2Button(m.chat, caption, userbot.packname, 'Delete', 'absend', 'Absen', 'absen', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(caption)}} )
   break;

   case "twm":
   m.reply('sedang memproses')
   download = await tiktok(button.split(" ")[1])
   conn.sendMessage(m.chat, await (await Ft.fetch(download.result.wm)).buffer(),"videoMessage",{quoted:m})
   break;
   case "tnowm":
   m.reply('sedang memproses')
   download = await tiktok(button.split(" ")[1])
   conn.sendMessage(m.chat, await (await Ft.fetch(download.result.nowm)).buffer(),"videoMessage",{quoted:m})
   break;
   case "tmusic":
   m.reply('sedang memproses')
   let p = await tiktokmusic(button.split(" ")[1])
   conn.sendFile(m.chat, p.meta.music.playUrl, null, null, m)
   break;
   case "thd":
   m.reply('sedang memproses')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.HD, null, json.result.desc, m)
   break;
   case "tsd":
   m.reply('sedang memproses')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.SD, null, json.result.desc, m)
   break;
   case "taudio":
   m.reply('sedang memproses')
   res = await fetch (`https://rizapi.herokuapp.com/api/twitter?url=${button.split(" ")[1]}`)
   json = await res.json()
   conn.sendFile(m.chat, json.result.audio, 'o.mp3', null, m)
   break;
   case "menu":
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

before: `*${me}*
*Name:* ${name}

*Ｓｔａｔｕｓ Ｂｏｔ:*
*› Runtime:* ${count(uptime)}
*› Uptime:* ${count(os.uptime())}
*› Hostname:* ${os.hostname()}
*› Total Fitur:* *${Object.keys(Events).length}* fitur

*ｓｔａｔｕｓ ｎｏｗ:*
*› Jam:* ${time}
*› Kalender islam:* ${dateIslamic}
*› Kalender Java:* ${week} ${weton} ${date}

*› Github:*\nhttps://github.com/Rizxyu/RIXLE-BOT`.trimStart(),
type: "*#type*\n",
after: "\n"
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
return "*°* " + userbot.prefix + menu.help
})].join("\n")
}),
after
].join("\n\n")

conn.send2ButtonLoc(m.chat, await (await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF6fyFoGCHmsmOXWjFxIXh-467D1nRhA4mQ&usqp=CAU')).buffer(), text, userbot.packname, `Creator`, `creator`, `Rules`, `rules`, m)
break;

   case "rules":
capt = `
Bot ini boleh digunakan oleh siapa saja asalkan tidak melanggar aturan norma hukum dan norma agama,
Dan juga jangan sekali kali spam bot apalagi spam command!
Gak boleh banding bandingin bot lain sama bot kami!

Bot ini menggunakan prefix ${userbot.prefix}

Note : jika Ada bug atau eror silahkan ketik
${userbot.prefix}report <apa yg di laporkan>
`
conn.sendButton(m.chat, capt, userbot.packname, 'Menu', 'menu', { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(capt)}} )
break;

   case "audio":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
if (yt === false) throw 'semua server gagal'
conn.sendFile(m.chat,yt.dl_link,"m.mp3",null,m)
} catch (e) {
throw e
}
break;

   case "video":
  try {
let yt = false
let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await ytv(button.split(" ")[1], server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
if (yt === false) throw 'semua server gagal'
conn.sendFile(m.chat,yt.dl_link,"m.mp4",null,m)
} catch (e) {
throw e
}
break;

   case "creator":
conarray = []
ownerContact = ['6282328303332', '62822980698995','6285783417029','62823283033323','6285640020165','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'Rizky',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, 'Ini nomer pembuat bot gak usah chat aneh aneh ya!',MessageType.text, { quoted: m} )
console.log(a)
break;
default:
throw new Error(`command ${button} tidak ada :v`) //biar tau soalny kesusahan di buat button audio asw
}
} catch (e) {
console.log(e)
}
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
