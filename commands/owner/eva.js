let util = Ft.util
module.exports = {
name: ["eva"],
owner:true,
description: "nih eval buat owner doang",
utilisation: userbot.prefix + "eva code",
type: ["owner"],
execute(m) {
let message = m.text
let { conn } = data
var konsol = message.slice(5)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('[', Ft.color('EVAL', 'silver'),']', Ft.color(Ft.moment(m.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), Ft.color(message))
} catch(e) {
  m.reply(String(e))
}
}
}