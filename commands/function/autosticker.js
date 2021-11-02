module.exports = { //By @arifirazzaq2001
name: ["autosticker"],
type: ['setting'],
description: "Setiap Ada Yang Kirim Foto/Video Berdurasi 1-9 detik bakal berubah jadi Sticker Secara Otomatis",
admin: true,
botAdmin:true,
utilisation: global.userbot.prefix+ "autosticker",

async execute(m, participants) {
let { conn, text} = data

      if (!m.message.videoMessage || isQuotedImage) {
const encmedia = conn
const media = await conn.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
	.input(media)
	.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
	})
	.on('error', function (e) {
console.log(`Error : ${e}`)
fs.unlinkSync(media)
m.m.reply('...')
	})
	.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
Conn.sendFile(m.chat, buffer, sticker)
fs.unlinkSync(media)
fs.unlinkSync(ran)
	})
	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
	.toFormat('webp')
	.save(ran)
	
	
	if (!m.message.imageMessage || isQuotedVideo)) { // Video Atau Gambar  
const encmedia = conn
const media = await conn.downloadAndSaveMediaMessage(encmedia)
if (Buffer.byteLength(media) >= 6186598.4) return m.reply(`sizenya terlalu gede sayang, dd gakuat :(`)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
	.inputFormat(media.split('.')[1])
	.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
	})
	.on('error', function (e) {
console.log(`Error : ${e}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
m.reply(`Gagal, video nya kebesaran, dd gakuat`)
	})
	.on('end', function () {
console.log('Finish')
buff = fs.readFileSync(ran)
conn.sendFile(m.chat, buff, sticker)
fs.unlinkSync(media)
fs.unlinkSync(ran)
	})
	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
	.toFormat('webp')
	.save(ran)
}
}

switch (autosticker) {
} //Switch nya Belum Siap, Gantian Buat! 




