module.exports = {
name: ["githubdl"],
type: ["download"],
description: "download file Zip github with username & repo",
utilisation: userbot.prefix + "githubdl <link>",

async execute(m) {
let { args } = data
//Madeby Rizky adi
try {
if (!args[0]) return m.reply('where username')
if (!args[1]) return m.reply('where repo')
if (!args[2]) return m.reply('type repo main or master?')
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`

m.reply(`compressing data to file zip`)
conn.sendFile( m.chat, url, null, null, m)
} catch (e) {
m.reply('sepertinya username atau repo salah')
}
}
}
