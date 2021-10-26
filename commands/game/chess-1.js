const CIG = require("chess-image-generator")
const Game = new CIG()
const chess = Game.chess

module.exports = {
name: "chess",
type: ["fun"],
description: "node js chess game",
uitilisation: userbot.prefix + "chess",
execute: async(m) => {
const { conn, args } = global.data
const type = args[0].toLowerCase()
const id = m.chat
switch(type) {
case "start": {
conn.chess = conn.chess ? conn.chess : {}
const game = conn.chess
if ("playing" in game.status) return m.reply("sudah ada yang bermain")
if (!("player1" in game)) {
game["player1"] = m.sender
game["status"] = "searching"
return m.reply("menunggu rekan untuk bermain")
}
if (!("player2" in game) && "player1" in game) {
game["player2"] = m.sender
game["status"] = "playing"
m.reply("rekan ditemukan!!")
await Game.loadArray([
    ['r','n','b','q','k','b','n','r',],
    ['p','p','p','p','p','p','p','p',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    [' ',' ',' ',' ',' ',' ',' ',' ',],
    ['P','P','P','P','P','P','P','P',],
    ['R','N','B','Q','K','B','N','R',],
])
buffer = await Game.generateBuffer()
conn.sendMessage(m.chat, buffer, "imageMessage", {caption: "partner ditemukan.. menunggu @"+m.sender.split("@")[0]})
}
}
break
case "move" :
try {
if (!("playing" in game.status)) return m.reply("nda ada permainan vng, ketik start dulu")
move = args[1]
if (!move) return m.reply("hmmfh")
await chess.move[move]
buff = await Game.generateBuffer()
Game.in_checkmate ? conn.sendMessage(m.chat, buff, "imageMessage", { quoted: m, caption: "check mate!!"}) //: Game.in_check ? conn.sendMessage(m.chat, buff, "imageMessage", { quoted: m, caption: "check!!"}) : conn.sendMessage(m.chat, buff, "imageMessage", { quoted: m})
} catch (err) {
m.reply("invalid move!!")
}
break




