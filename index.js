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
 
 
console.log(Ft.banner.string)
conn.version = [2, 2119, 6]
conn.logger.level = "warn"

if (fs.existsSync('./session.json')) conn.loadAuthInfo('./session.json')
   conn.on('qr', qr => {
   console.log(`scan qr nya ngab`)
})
conn.on('credentials-updated', () => {
	const authInfo = conn.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

conn.on("open", () => console.log("Succes connet to baileys"))


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

