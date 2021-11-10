const { Mimetype } = require(baileys)
const _$ = require('cheerio')
const _url = require('url')
const _axios = require('axios') 
const _math = require('mathjs') 
const GetLink = async (u) => {
        console.log('⏳  ' + `Get Page From : ${u}`)
						const zippy = await _axios({ method: 'GET', url: u }).then(res => res.data).catch(err => false)
						console.log('✅  ' + 'Done')
						const $ = _$.load(zippy)
						if (!$('#dlbutton').length) {
							return { error: true, message: $('#lrbox>div').first().text().trim() }
						}
						console.log('⏳  ' + 'Fetch Link Download...')
						const filename0 = $('title').text()
						const filename = filename0.replace('Zippyshare.com - ', '')
						const url = _url.parse($('.flagen').attr('href'), true)
						const urlori = _url.parse(u)
						const key = url.query['key']
						let time;
						let dlurl;
						try {
							time = /var b = ([0-9]+);$/gm.exec($('#dlbutton').next().html())[1]
							dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (2 + 2 * 2 + parseInt(time)) + '3/DOWNLOAD'
						} catch (error) {
							time = _math.evaluate(/ \+ \((.*)\) \+ /gm.exec($('#dlbutton').next().html())[1])
							dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (time) + '/DOWNLOAD'
						}
						console.log('✅  ' + 'Done')
						return { error: false, url: dlurl, name: filename }
					}

module.exports = {
name: "zippydl",
type: ['download'],
description: "download zippyshare",
utilisation: global.userbot.prefix+ "zippyshare" + " link",
execute: async(m) => {
const { conn, text } = data
if (!text) return m.reply("masukkan link")
if (!text.includes("zippyshare")) return m.reply("link tidak valid")
const getLink_zippy = await GetLink(text)
if(getLink_zippy.error) return m.reply(`ERROR!\n\nErr : ${getLink_zippy.message}`)
try {
name = getLink_zippy.name.split(".")
nama = name[name.length -1]
conn.sendFile(m.chat, getLink_zippy.url, "", "", m, false, { filename: getLink_zippy.name, mimetype: nama == "mp4" ? Mimetype.mp4 : nama == "pdf" ? Mimetype.pdf : nama})
} catch (err) {
conn.sendMessage(m.chat, `Gagal mengirim file\nMungkin size file melebihi limit Whatsapp`)
console.log(err)
}
}
}
