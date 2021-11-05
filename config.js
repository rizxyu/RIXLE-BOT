let fs = require('fs')

userbot = {
 Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "6285217835752", "380946298137","6289646548836" ],
  MONGO_URI: "mongodb+srv://<username>:<password>@cluster0.eyx0e.mongodb.net/<dbname>?retryWrites=true&w=majority",
   mess: {
   wait: "tunggu sedang di proses...",
   error: "errorr!!"
   },
   prefix: ["/"],
   gexp: 50,
   limit: 100,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://i.ibb.co/XJHWhvb/380-94-629-8137-20211105-110105.jpg', // buat Image Button
   packname: "KIRONEKO-BOT",
   author: '© 2021 - ❤',
    setting: {
    admin: "only admin can access this",
    group: "only group can access this",
    owner: "owner only pack can access this",
    jadibot: "jadibot only can access this",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR NIKI DERENG DIPUNMURUPAKEN!"
    }
}
module.exports = userbot


