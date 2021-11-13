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
let kamu = fs.readFileSync('./db/daftar.json')
  let teks = `[ YOUR PROFILE ]
*Name:* ${conn.getName(m.sender)}
*Waktu terregistrasi:* ${kamu.waktu == '' ? 'Belum Terdaftar' : '' || kamu.waktu}
*Level:* null
`
}
}
