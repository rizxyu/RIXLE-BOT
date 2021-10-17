const wikipedia = require('../../Lib/wikipedia.js').wikipedia
let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")

module.exports = {

name: ["wiki"],

type: ["searching"],
useLimit: true,
description: "search text on wikipedia",
utilisation: userbot.prefix + "wiki",

async execute(m) {
 let { conn, text } = data
if (!text) return m.reply('put query')
wikipedia(`${text}`).then(res => {
    m.reply(res.result.isi)
  }).catch(() => { m.reply('Tidak Ditemukan') })
}
}
