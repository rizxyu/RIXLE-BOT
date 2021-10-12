let imageToBase64 = require('image-to-base64');
let axios = require("axios");

module.exports = {
name: ["infobmkg"],
type: ["information"],
useLimit: true,
description: "mencari info bmkg",
utilisation: userbot.prefix + "infobmkg",

async execute(m) {
let { conn } = data
await m.reply('Searching...')
    axios.get('https://alfians-api.herokuapp.com/api/infogempa')
    .then((res) => {
      imageToBase64(res.data.map)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

    axios.get(`https://st4rz.herokuapp.com/api/infogempa`).then ((res) => {
        let str = `*INFO GEMPA*\n\nLokasi : ${res.data.lokasi}\nKedalaman : ${res.data.kedalaman}\nKoordinat : ${res.data.koordinat}\nMagnitude : ${res.data.magnitude}\nWaktu : ${res.data.waktu}`

    conn.sendFile(m.chat, buf, 'infobmkg.jpg', str, m)
          })
      })
  })
}
}
