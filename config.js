let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6283151729751", "6285524954326" ],
  MONGO_URI: "mongodb+srv://zanDb:veth0581@cluster0.eyx0e.mongodb.net/<mydb>?retryWrites=true&w=majority",
   mess: {
   wait: "[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar",
   error: "[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem"
   },
   prefix: ["z"],
   gexp: 50,
   limit: 20,
   eror: "[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem",
   waits: "[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar",
   butmag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHDLrd0_DwHnJfuZ_pRMOAbLi3-ot-NxyPA&usqp=CAU', // buat Image Button
   packname: "Mau Colong Yah Eya ?",
   author: 'Made With By @Dend <R>',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}
module.exports = userbot


