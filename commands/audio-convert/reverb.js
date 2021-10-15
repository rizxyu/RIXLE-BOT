const util = Ft.util
const path = Ft.path
const fs = Ft.fs
const ffmpeg = Ft.ffmpeg
const sox = require("sox-audio")

module.exports = {
name: ["reverb"],
type: ["audio"],
description: "reverb effects audio",
utilisation: "#reverb <reply audio>",
async execute(m) {
let {conn} = data
const dir = path.join(__dirname, "..", "/tmp/", getRandom(".mp3"))
if (Object.keys(m.message)[0] != 'extendedTextMessage') return reply("Reply audio nya!")
const encmed = JSON.parse(JSON.stringify(m.message.extendedTextMessage.contextInfo).replace("quotedM", "m"))
if (Object.keys(encmed.message)[0] != mediaType.audio) return reply("Media tersebut harus audio")
const rdir = path.join(__dirname, "..", "/tmp/", getRandom(".mp3"))
const audio = await conn.downloadMediaMessage(encmed, "stream")
ffmpeg(audio) 
.audioQuality(1)
.audioFrequency(48000)
.save(rdir)
.on('start', function (commandLine) {
console.log('Spawned Ffmpeg with command: ' + commandLine);
})
.on('error', function (err, stdout, stderr) {
 return new Error('An error occurred: ' + err.message, err, stderr);
})
.on('end', async () => {
sox(rdir)
.inputBits(192)
.inputSampleRate('48k')
.addEffect('gain', ['-3'])
.addEffect('pad', ['0', '6'])
.addEffect('reverb', ['100', '25', '75', '100', '0', '3'])
.output(dir)
.outputSampleRate('48k')
.outputBits(192)
.on('end', async () => {
audio = await fs.readFileSync(dir)
await conn.sendMessage(m.chat, audio, mediaType.audio, {
quoted: m,
mimetype: 'audio/mpeg',
mp3: true
})
await fs.unlinkSync(rdir)
await fs.unlinkSync(dir)
})
.run();
})
}
}

function getRandom (ext) {
return `${Math.floor(Math.random() * 10000)}${ext}`
}