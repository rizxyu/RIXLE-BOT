let fs = require("fs")
module.exports = {
 name: ['ttp'],
 type: ['sticker'],
 description: "untuk membuat sticker teks bergerak",
 utilsation: userbot.prefix + "ttp",
 
async execute(m) {
 let { text, conn } = data
 if (!text) return m.reply("teks??")
ran = getRandom(".webp")
int = getRandom(".jpg")
 let p = await Ft.getBuffer(`https://api.xteam.xyz/ttp?file&text=${text}`)
Ft.fs.writeFileSync(`${int}`, p)
let ipt = await Ft.fs.readFileSync(`${int}`)
Ft.exec(`convert ${int} ${ran}`)
.on("error", () => reply("error"))
await sleep(2)
conn.sendMessage(m.chat, Ft.fs.readFileSync(`${ran}`), "stickerMessage")
await sleep(2)
Ft.fs.unlinkSync(ran)
}
}

function getRandom(ext) {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
}
