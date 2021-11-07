let syntaxerror = require('syntax-error')
let util = require('util')
module.exports = {
name: [">"],
custom: true,
owner:true,
description: "nih eval buat owner doang",
utilisation: userbot.prefix + "eva code",
type: ["owner"],
async execute(m){
var _q = m.text.slice(2)
var _return
var _syntax = ""
var { conn, args } = data
try {
let exec = new (async () => {}).constructor('print', 'm', 'require', 'conn', 'Array', 'process', 'args', 'module', 'exports', 'argument', _q)
_return = await exec.call(conn, (...args) => {
  if (--i < 1) return
  console.log(...args)
  return conn.reply(m.chat, util.format(...args), m)
}, m, require, conn, process, args, [conn, data])
} catch (e) {
  let err = await syntaxerror(_q, 'evalError:', {
  allowReturnOutsideFunction: true,
  allowAwaitOutsideFunction: true
})
if (err) _syntax = err + '\n\n'
_return = e
} finally {
m.reply(_syntax+util.format(_return))
}
}
}
