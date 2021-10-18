"use strict";
const fs = require("fs")
const qrcode = require("qrcode")
const Baileys = "@adiwajshing/baileys";
const { WAConnection: _WAConnection } = require("@adiwajshing/baileys");
const WAConnection = require('./Lib/simple').WAConnection(_WAConnection);
const { Functions } = require('./Lib/Functions');
const { JsonDB } =  require("node-json-db")
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
  

global.antidelete = false
  global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
    global.Ft = new Functions();// Menghubungkan dari Function.js
      global.mediaType = require(Baileys).MessageType //Biar keren hehe
        global.conn = new WAConnection(); //Wa Connect dari baileys
          global.botuser = require('./config')//Menghubungkan Ke Conection string
            global.Events = {}
             global.baileys = Baileys //Hehe
               global.db = new JsonDB(new Config("database", true, false, '/'));
                global.Public = false
                 global.scrap = require("./Lib/scrape")
//*biar g eror
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./Lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Silakan instal ffmpeg untuk mengirim video (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stiker tidak bisa dianimasikan tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stiker mungkin tidak berfungsi tanpa imagemagick jika libwebp di ffmpeg tidak diinstal (pkg install imagemagick)')
}
 
console.log(Ft.banner.string)
conn.version = [2, 2119, 6]
conn.logger.level = "warn"

if (fs.existsSync('./session.json')) conn.loadAuthInfo('./session.json')
   conn.on('qr', qr => {
   console.log(`scan qr nya ngab`)
})
conn.on('connecting', () => {
   console.log(`connecting....!`)
 
})

conn.on("open", () => {
const authInfo = conn.base64EncodedAuthInfo()
console.log("Succes connet to baileys")
fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})


 require('./src/loader')
 async function run() {// Function biar bisa run bot
 let message = require('./action/chats');
 let action = require('./action/action');
await conn.connect();
 conn.message = message.msg
 conn.on('chat-update', conn.message);
 conn.on('group-participants-update', action.groupUpdate);
 }
 Ft.action()
 run();// Menjalangkan Bot

