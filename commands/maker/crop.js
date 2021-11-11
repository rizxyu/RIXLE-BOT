const util = require("util")
const path = require ("path")
const Jimp = require("jimp")
const request = require("request-promise")

module.exports = {
name: ["crop"],
description: "crop image",
utilisation: `${userbot.prefix}crop link`,
type: ["maker"],

async execute(m) {
let { conn, args } = data

if (!args[0]) return m.reply("url salah")
if (!args[1]) return m.reply("kordinat")
if (!args[2]) return m.reply("kordinatnya mana anjg")
if (!args[3]) return m.reply("au luh")
if (!args[4]) return m.reply("tolol")
//G usah hapus wm kontol
async function crop() {
  // reads the image
  const image = await Jimp.read(args[0]);
  // crops the image
  await image.crop(args[1], args[2], args[3], args[4]);
  // Saves the image to the file system
  await image.writeAsync(`${Date.now()}_crop_150x150.png`);
}
 let crot = crop()
 conn.sendFile(m.chat, crot, null, null, m)
}
}
