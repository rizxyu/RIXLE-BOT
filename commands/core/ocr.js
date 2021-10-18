const tesseract = require("node-tesseract-ocr")

module.exports = {
 name: ['ocr'],
 type: ['default'],
 description: "untuk memindahkan text dari image ke dalam bentuk teks",
 utilsation: userbot.prefix + "ocr",
 
async execute(m) {
 let { text, conn } = data

let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || ""
  if (!mime) throw `ini tu gunanya buat ngambil teks yang ada digambar, kirim/balas gambar dengan perintah ${usedPrefix + command}`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung!`
  let img = await q.download();
  //let url = await uploadImage(img)
  tesseract
    .recognize(img, {})
    .then((text) => {
      //console.log("Result:", text)
      m.reply(text);
    })
    .catch((error) => {
      console.log(error.message);
      throw eror
    })
}
}
