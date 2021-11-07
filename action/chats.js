module.exports = { 
async msg(chats) {
if (!chats.hasNewMessage) return
m = chats.messages.all()[0]
if (!m.message) return
if (m.key && m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0]=== 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
try {
const mess = Object.keys(m.message)[0];
prefix = userbot['prefix'];
require('../Lib/simple')['smsg'](this, m);
let body = (mess === 'conversation' && m.text.startsWith(prefix)) ? m.text : (mess == 'imageMessage') && m.message.imageMessage.caption.startsWith(prefix) ? m.message.imageMessage.caption : (mess == 'videoMessage') && m.message.videoMessage.caption.startsWith(prefix) ? m.message.videoMessage.caption : (mess == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : ""
let message = (mess === 'conversation') ? m.message.conversation : (mess === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
if (message.startsWith(prefix)) console.log(Ft['color']('\x1b[1;37m>', 'cyan'), Ft['color']('[CMD]'), Ft['color'](Ft['moment'].tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'), 'cyan'), Ft['color']('Command', 'cyan'), 'Dari', Ft['color'](await this.getName(m.sender)));
else console.log(Ft['color']('\x1b[1;37m>', 'cyan'), Ft['color']('[Message]'), Ft['color'](Ft['moment'].tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'), 'cyan'), Ft['color']('Message', 'yellow'), 'Dari', Ft['color'](await this.getName(m.sender)));
global.command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
require('./cmd.js').Command(this, m);
}
catch (e) {
console.log('Error : %s', Ft['color'](e, 'red'));
console.log(e);
}
}
}
