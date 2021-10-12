const fs = require('fs')
const { exec } = require('child_process')
const { toAudio } = require('../../Lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

module.exports = {
name: ["tomp3"],
type: ["audio"],
useLimit: true,
description: "convert video to mp3",
utilisation: userbot.prefix + "tomp3",

async execute(m) {
let { conn } = data
let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) m.reply(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${userbot.prefix}tomp3*`)
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m, mimetype: 'audio/mp4'
  })
}
}
