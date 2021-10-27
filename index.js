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
          global.botuser = require('./config')//Menghubungkan Ke Connection string
            global.Events = {}
             global.baileys = Baileys //Hehe
               global.db = new JsonDB(new Config("database", true, false, '/'));
                 global.Public = false
                   global.scrap = require("./Lib/scrape");

conn.version = [2, 2119, 6]
conn.logger.level = "warn"
conn.browserDescription = ['R I X L E   B O T', 'EDGE', '94.0.992.50']

if (fs.existsSync('./session.json')) conn.loadAuthInfo('./session.json')
conn.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(
      conn.logger.warn("[!] Scan Kode QR Diatas, Expired dalam 30 detik")
    )
})
conn.on('credentials-updated', () => {
        conn.logger.warn('credentials updated!')
        })
conn.on('connecting', () => {
        console.log(`Connecting...`)
        })
conn.on("open", () => {
const authInfo = conn.base64EncodedAuthInfo()
        conn.logger.warn('open docs is complete!')
        let stats = {
   status: 200,
   message: "success",
   info: "berhasil masuk ke dalam baileys"
}
conn.on("ws-close", async() => {
        conn.logger.warn('Connected Timeout')
        })
conn.on("close", async() => {
        conn.logger.warn('Closed Connection')
        })
conn.on("open", () => {
        conn.longger.warn('reopen docs!')
        })

console.log(stats)
fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

setInterval(() => {
 conn.setStatus(`Ｓｔａｔｕｓ Ｂｏｔ:
› Runtime: ${Ft.count(process.uptime())}
› Hostname: ${Ft.os.hostname()}
| BY FEAR TEAM`).catch((_) => _)
},1000)
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
 console.clear()
 run();// Menjalankan Bot
