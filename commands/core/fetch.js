let fetch = require('node-fetch')
let util = require('util')

module.exports = {
name: ["get"],
type: ["default"],
useLimit: true,
description: "to get api fetch",
utilisation: userbot.prefix + "get (url)",

async execute(m) {
let { conn, text } = data

if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
  let _url = new URL(text)
  let url = `${_url}`
  let res = await fetch(url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    return m.reply(`Content-Length: ${res.headers.get('content-length')}`)
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, null, text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
}
}
