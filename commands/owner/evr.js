module.exports = {
name: ["evr"],
description: "ini eval tapi beda ama command eva harus owner yg bisa make",
utilisation: userbot.prefix + "evr code",
type: ["owner"],
owner: true,
execute(m) {
let message = m.text
let { conn } = data
console.log('[', Ft.color('EVAL', 'silver'),']', Ft.color(Ft.moment(m.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), Ft.color(message))
try {
return m.reply(JSON.stringify(eval(message.slice(5)),null,'\t'))
} catch(e) {
m.reply(`${e}`)
}
}
}