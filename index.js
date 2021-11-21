"use strict";
const fs = require("fs")
const qrcode = require("qrcode")
const cp = require('child_process')
const Baileys = "@adiwajshing/baileys";
const { WAConnection: _WAConnection } = require("@adiwajshing/baileys");
const WAConnection = require('./Lib/simple').WAConnection(_WAConnection);
const { Functions } = require('./Lib/Functions');
const { start } = require('./Lib/banner');
const { JsonDB } = require("node-json-db")
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

global['write'] = {};
 global['write']['words'] = JSON.parse(fs.readFileSync('./tmp/debug.json')); // Biar Bingung Orang Awam, dan Susah Recode :v
  global.antidelete = false
   global.welcome = true
    global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
     global.Ft = new Functions(); // Menghubungkan dari Function.js
      global.mediaType = require(Baileys).MessageType //Biar keren hehe
       global.conn = new WAConnection(); //Wa Connect dari baileys
        global.botuser = require('./src/config') //Menghubungkan Ke Connection string
         global.Events = {}
          global.baileys = Baileys //Hehe
           global.db = new JsonDB(new Config("database", true, false, '/'));
            global.Public = false
             global.scrap = require("./Lib/scrape");
//msgTyp
global.text = mediaType.text
global.image = mediaType.image
global.video = mediaType.video
global.audio = mediaType.audio
global.location = mediaType.location
global.document = mediaType.document


async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('../../Lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Silakan instal ffmpeg untuk mengirim video (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stiker tidak bisa dianimasikan tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stiker mungkin tidak berfungsi tanpa imagemagick jika libwebp di ffmpeg tidak diinstal (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)

conn.version = [ 2, 2140, 12 ]
conn.logger.level = "warn"
conn.browserDescription = ['Rixle Type 3', 'SAFARI', '8.1']

// Mengurangi logger mempercepat Balas Pesan Fixed @arifirazzaq2001
if (fs.existsSync(global.write.words.qrcode)) conn.loadAuthInfo(global.write.words.qrcode)
conn.on('qr', qr => {
 conn.logger.warn(botuser.simple.expiredQr)
  })
   conn.on('credentials-updated', () => {})
    conn.on('connecting', () => {})
     conn.on("open", () => {
      conn.on("ws-close", () => {})
       conn.on("close", () => {}) 
const authInfo = conn.base64EncodedAuthInfo() 
fs.writeFileSync(global.write.words.qrcode, JSON.stringify(authInfo, null, '\t'))

console.clear()
conn.logger.warn(botuser.simple.refresh)
start('\n',
    conn.logger.warn('\n')
  )
})

setInterval(() => {
 conn.setStatus(`PREFIX: ${userbot.prefix} | BOT AKTIF: ${Ft.count(process.uptime())} | Listening Youtube🎧`).catch((_) => _)
},1000)
 require('./src/loader');

 async function run() {// Function biar bisa run bot
 let message = require('./action/chats');
 let action = require('./action/action');
 await conn.connect();
 conn.message = message.msg
 conn.on('chat-update', conn.message);
 conn.on('group-participants-update', action.groupUpdate); // ivan tolol
 }
 Ft.action()
 run();// Menjalankan Bot
