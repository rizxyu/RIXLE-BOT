const fs = Ft.fs
const tiktok = require("../../Lib/scrape.js").tiktok

module.exports = {
name: ["tiktok"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
if (!args[0]) return m.reply("url ?")
if (!args[0].includes("tiktok")) return m.replu("url salah!")
if (!args[1]) return m.reply("tambahkan format wm atau nowm")
if (!args[1].includes("wm")) return m.reply("format salah")
download = await tiktok([args[0]])
_download = download.result[args[1]]
conn.sendFile(m.chat, _download, "", null, m)
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
