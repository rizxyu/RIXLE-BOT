const fs = Ft.fs
const Zipdl = require("../../Lib/zipdown").ZippDL

//Riz24

module.exports = {
name: ["zippydl"],
type: ["download"],
description: "download file from zippyshare with url",
utilisation: userbot.prefix + "zippyshare <link>",


async execute(m) {
let { conn, text } = data
const isUrl = (url) =>  url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
try {
if (!text) return m.reply("url ?")
if(!isUrl(text) && !text.includes('zippyshare')) return m.reply("url salah pack")
teks = text
res = await Zipdl(teks)
               result = `*Data Berhasil Didapatkan!*
               
        *📛 Nama* : ${res.title}
        *⚖️ Ukuran* : ${res.size}
        *🅾️ Type* : ${res.filetype}
        *🗓️ Upload* : ${res.upload}
        *🔗 Link* : ${res.url}

_*File sedang dikirim, Silahkan tunggu beberapa menit*_`

m.reply(Ft.util.format(result))
conn.sendFile(m.chat, res.url, res.filetype, null, m)
} catch (e) {
console.log(e)
}
}
}
