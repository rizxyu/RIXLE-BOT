
module.exports = {
name: ["dashboard"],
    type: ['default'],
    description: "all commands use limit",
    utilisation: global.userbot.prefix+ "dashboard",
async execute(m) {
let asu = ``
for (i in db.data) {
asu += `-${i}: ${db.data[i]}\n`
}
m.reply(asu.trim())
}
}

