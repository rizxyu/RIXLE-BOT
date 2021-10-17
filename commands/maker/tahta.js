let fs = require('fs')
const fetch = require("node-fetch")
let { spawn } = require('child_process')
const { unlinkSync } = require('fs')

module.exports = {
name: ["tahta"],
type: ["maker"],
useLimit: true,
description: "make tahta picture",
utilisation: userbot.prefix + "tahta",

async execute(m) {
let { conn, text } = data

//if (!text) return m.reply(`contoh:\n${userbot.prefix}tahta\n\n@_RizkyAdi`)

    try {
      const splitText = text.replace(/(\S+\s*){1,10}/g, '$&\n')
      const fixHeight = 'HARTA\nTAHTA\n' + splitText.toUpperCase()
      spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        './src/font/hartatahta.ttf',
        '-pointsize',
        '200',
        '-tile',
        './src/harta.jpg',
        '-annotate',
        '+20+80',
        fixHeight,
        '-wave',
        '10x175',
        './src/tahta.jpg'
      ])
        .on('error', () => m.reply(`_*Error!*_`))
        .on('exit', () => {
          conn.sendFile(m.chat, './src/tahta.jpg', 'harta5.jpg', 'Done\n*@_RizkyAdi*', m)
          fs.unlinkSync('./src/tahta.jpg')
        })
    } catch (e) {
      console.log(e)
      return m.reply('_*Error!*_')
    }
 }
}
