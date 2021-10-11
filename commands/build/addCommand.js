
module.exports = {
name: ["addcommand"],
type: ["create"],
description: "membuat command",
utilisation: "#addcommand <commandname> <type> <description> <code>",
execute(m) {
let { conn, args, command, text } = data
 
if (!args[0]) return m.reply("command name ?")
if (!args[1]) return m.reply("type name ?")
if (!args[2]) return m.reply("code ? ")
if (args[0] in global.Events) return m.reply("command itu sudah ada")
 let code = args[2]
 let execute = async (m) => {
let { conn, text, command, args } = data
m.reply("workas")
}
 addCommand(args[0], args[1], m.sender.split("@")[0], execute)
 m.reply("done")
}
}


function addCommand(name = "", type = "", pengirim, execute) {
global.Events[name] = {
name: name,
custom: true,
type: type,
description: "created by " + pengirim,
utilisation: userbot.prefix + name,
execute: execute,
}
}
