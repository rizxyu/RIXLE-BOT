let fs = require('fs')
const { createHash } = require('crypto')
let moment = require('moment-timezone')

module.exports = {
name: ["claim"],
type: ["adventure"],
daftar: true,
description: "claim",
utilisation: userbot.prefix + "claim",

async execute(m) {
let { conn, text } = data
const json = JSON.parse(fs.readFileSync('./db/rpgdb.json'))

let exp = 100
let limit = 10
let obat = 1
let apel = 1
json.push(m.sender, exp, limit, obat, apel, + new date)
fs.writeFileSync('./db/rpgdb.json', JSON.stringify(json))
   

let capt = `
Selamat kamu mendapatkan 100 xp > 10 limit > 1 💊 Obat > 1 🍎 Apel
`

m.reply(capt)
}
}
