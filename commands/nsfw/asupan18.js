module.exports = {

name: ["asupan18"],

type: ["nsfw"],

useLimit: true,

description: "asupan +18",

utilisation: userbot.prefix + "asupan18",

async execute(m) {

let { conn, args } = data

await m.reply('[❗] WAIT, Tunggu Sebentar')

conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)

}

}
