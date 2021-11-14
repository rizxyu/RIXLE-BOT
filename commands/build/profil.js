let fs = require('fs')
const { createHash } = require('crypto')
let moment = require('moment-timezone')

module.exports = {
name: ["profile", "profil"],
type: ["owner"],
owner: true,
description: "check your profile",
utilisation: userbot.prefix + "profile",

async execute(m) {
let { conn, text } = data
const json = JSON.parse(fs.readFileSync('./db/daftar.json'))
  let teks = `[ YOUR PROFILE ]
*Name:* ${conn.getName(m.sender)}
*Waktu terregistrasi:* ${json.waktu == '' ? 'Belum Terdaftar' : '' || kamu.waktu}
*Level:* ${json.level == '' ? 'Belum terdaftar' : '' || json.level}
`
m.reply(teks)
}
}
