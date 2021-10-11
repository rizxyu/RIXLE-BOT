const { readdirSync } = require("fs")
module.exports = {
    name: ['help'],
    type: ['default'],
    description: "mengetahui deskripsi commands lain",
    utilisation: userbot.prefix +'help',
 
execute(m) {
	let { args } = data
try {
if (!args[0]) return m.reply("command?")
let { description, utilisation } = global.Events[args[0]]
m.reply(`Description: ${description}\nUse: ${utilisation}`)
} catch {
m.reply(`not such ("${args[0]}") command!`)   
}
}
}