let fetch = require("node-fetch");
module.exports = {
name: ["hug"],
type: ["fun"],
description: "screenshot web link",
utilisation: userbot.prefix + "ssweb <link>",

async execute(m) {
let { conn } = data
if (m.quoted && m.quoted.sender) m.mentionedJid.push(m.quoted.sender);
if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
let res = await fetch(`https://some-random-api.ml/animu/hug`)
	let json = await res.json();
conn.sendFile(m.chat, json.link, "wibu.gif", `@${m.sender.split("@")[0]} ${command} ${m.mentionedJid.map((user) => user === m.sender ? "themselves " : `@${user.split("@")[0]}`).join(", ")}`, m, { contextInfo: { mentionedJid: [...m.mentionedJid, m.sender],
				}})
	//else return m.reply(json);
}
}
