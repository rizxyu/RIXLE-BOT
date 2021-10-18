const axios = require("axios");

module.exports = {
 name: ['nobg'],
 type: ['sticker'],
 description: "untuk membuat sticker no background",
 utilsation: userbot.prefix + "nobg",
 
async execute(m) {
 let { text, conn } = data

let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ""
  if (/image/.test(mime)) {
    let img = await q.download();
    let imgbase64 = img.toString("base64")
    let data = await axios.post(
      "https://salisganteng.pythonanywhere.com/api/remove-bg",
      {
        "api-key": "salisheker",
        image: imgbase64,
      }
    );
    await conn.sendFile(m.chat, data.data.image, "", "ᵏᵒⁿᵗᵒˡᵒᵈᵒⁿ", m, false)
  } else return m.reply(`balas foto dengan perintah ${userbot.prefix + command}`)
 }
}
