module.exports = { 
name: "antitroli",  
async functions(m) { 
if (m.message && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Fake Troli Detected\n\n' + require('util').format(m.key))
}
}
}
