const fetch = require('node-fetch')
const fs = require('fs')
let moment = require('moment-timezone')

module.exports = { 
name: "firstchat",  
async functions(m) { 
   if (m.chat.endsWith('broadcast')) return 
    if (m.fromMe) return
    let name = conn.getName(m.sender)
    let pc = JSON.parse(fs.readFileSync('./db/firstchat.json'))
    pc.push(+ new Date )
    if ( new Date - pc < 86400000 ) return
   let capt = `
Hai ${name} ${ucapan()}

Saya adalah Bot Auto Downloader
Kalau ingin tahu Fitur lainnya klik tombol dibawah ya
`
   this.sendButtonLoc(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEfk8DT2XA3wiM2fcKwU_fuKlp77oZEl0A&usqp=CAU')).buffer(),
capt, userbot.packname, 'Menu', 'menu', m)
    fs.writeFileSync('./db/firstchat.json', JSON.stringify(pc))
}
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
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
