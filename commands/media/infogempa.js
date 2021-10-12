let imageToBase64 = require('image-to-base64');
let axios = require("axios");

module.exports = {
name: ["infogempa"],
type: ["information"],
useLimit: true,
description: "informasi gempa",
utilisation: userbot.prefix + "infogempa",

async execute(m) {
let { conn } = data

await m.reply('*[❗] WAIT, Tunggu Sebentar*') 
      axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) => {
         let hasil = ` *Info Gempa* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman* : _${res.data.kedalaman}_ \n *Koordinat* : _${res.data.koordinat}_ \n *Magnitude* : _${res.data.magnitude}_ \n *Waktu* : _${res.data.waktu}_ `
  
    conn.reply(m.chat, hasil, m)
   })
}
}
