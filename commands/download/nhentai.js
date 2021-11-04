let fs = require('fs')
let request = require('request')
let fetch = require('node-fetch')
let topdf = require('image-to-pdf')
let nhentai = require('nhentai-node-api')

module.exports = {

name: "nhentai",
command: ["nhdl","nhentaipdf","nhentai"],
type: ["nsfw"],
useLimit: true,
description: "Download nhentai in pdf",
utilisation: userbot.prefix + "nhentai <code>",

async execute(m) {
  
let { conn, args } = data
    if (!args[0]) return m.reply('Cari apa?')
	if (isNaN(args[0])) return m.reply('Pake angka')
	await m.reply('Loading...')
	let count = 0
	let ResultPdf = []
	let doujin = await nhentai.getDoujin(args[0])
	let title = doujin.title.default
	let details = doujin.details
	let parodies = details.parodies.map(v => v.name)
	let characters = details.characters.map(v => v.name)
	let tags = details.tags.map(v => v.name)
	let artists = details.artists.map(v => v.name)
	let groups = details.groups.map(v => v.name)
	let categories = details.categories.map(v => v.name)
	let array_page = doujin.pages

	conn.sendMessage(m.chat,await (await Ft.fetch(array_page[0])).buffer(),"imageMessage",{quoted:m, caption: `*${title}*\n_${doujin.title.native || ''}_\nLanguage: ${doujin.language}\nParodies: ${parodies.join(', ')}\nGroups: ${groups.join(', ')}\nArtists: ${artists.join(', ')}\nTags: ${tags.join(', ')}\nCategories: ${categories.join(', ')}\nPages: ${array_page.length}\nFavorited: ${doujin.favorites}\nLink: ${doujin.link.replace('nhentai.net/g', 'cin.pw/v')}`, thumbnail:Buffer.alloc(0)})

	for (let index = 0; index < array_page.length; index++) {
		if (!fs.existsSync('./nhentai')) fs.mkdirSync('./nhentai')
		let image_name = './nhentai/' + title + index + '.jpg'
		await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
		console.log(array_page[index])
		ResultPdf.push(image_name)
		count++
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, 'A4')
		.pipe(fs.createWriteStream('./nhentai/' + title + '.pdf'))
		.on('finish', resolve)
	)

	for (let i = 0; i < array_page.length; i++) {
		fs.unlinkSync('./nhentai/' + title + i + '.jpg')
	}
	
	let size = await fs.statSync(`./nhentai/${title}.pdf`).size
	if (size < 45000000) {
		m.reply('Uploading...')
		let thumbnail = await (await fetch(doujin.cover)).buffer()
		await conn.sendFile(m.chat, fs.readFileSync(`./nhentai/${title}.pdf`), `${title}.pdf`, '', m, false, { asDocument: true, thumbnail: thumbnail })
		.then(() => fs.unlinkSync(`./nhentai/${title}.pdf`))
	} else {
		m.reply('Uploading to anonfiles because file size to large')
		let options = {
			method: 'POST',
			url: 'https://api.anonfiles.com/upload',
			formData: {
				file: fs.createReadStream(`./nhentai/${title}.pdf`),
			},
		}

		request(options, function(err, res, body) {
			if (err) throw err
			fs.unlinkSync(`./nhentai/${title}.pdf`)
			m.reply('Link download to file: ' + JSON.parse(body).data.file.url.full)
		})
	  }
   }
}
