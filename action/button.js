module.exports = {
async execute(m, {button}) {
	
try {
switch (button) {
case "creator": {
this.sendContact(m.chat, conn.user.jid, "Fauzan", m)
}
break
}
} catch (e) {
console.log(e)
}
}
}
