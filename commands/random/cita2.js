let fetch = require("node-fetch")
let arr = []
fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
  .then(res => res.text())
  .then(txt => arr = txt.split('\n'))

module.exports = {
name: ["cita cita", "Brando"],
custom: true,
owner:true,
description: "Brando geming Bocil kematian",
utilisation: userbot.prefix + "cita cita",
type: ["random"],
async execute(m){
let { conn } = data

let cita = arr[Math.floor(Math.random() * arr.length)]
  if (!cita) throw false
  await conn.sendFile(m.chat, cita, null, null, m, 1, { mimetype: 'audio/mp4' })
}
}
