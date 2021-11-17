const { servers, yta, ytv } = require('../../Lib/y2mate')
const fetch = require('node-fetch')
const { tiktok } = require("../../Lib/scrape.js")
const { fbdl } = require('../../Lib/fbdl')
const yts = require('yt-search')
const _math = require('mathjs')
const { Mimetype } = require(baileys)
const _$ = require('cheerio')
const _url = require('url')
const _axios = require('axios')
const limit = 30
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
name: "autodownlaod", 
async functions(m) {
let { conn } = data
let url = m.text.split(/\n| /i)[0]

if (/^.*cocofun/i.test(m.text)) {
        let res = await fetch(API('jojo', '/api/cocofun-no-wm', { url }))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
      
        // m.reply(util.format(json))
        await this.sendFile(m.chat, json.download, '', 'done', m)
    }

   if (/^https?:\/\/.*youtu/i.test(m.text)) {
  let results = await yts(m.text)
        let vid = results.all.find(video => video.seconds < 3600)
        if (!vid) return m.reply('Video/Audio Tidak ditemukan')
        let yt = false
        let usedServer = servers[0]
        for (let i in servers) {
            let server = servers[i]
            try {
                yt = await yta(vid.url, server)
                yt2 = await ytv(vid.url, server)
                usedServer = server
                break
            } catch (e) {
                console.log("Tidak Dapat Menemukan Sumber mencoba Data lain")
           }
        }
        if (yt === false) return m.reply(eror)
        if (yt2 === false) return m.reply(eror)
        let { dl_link, thumb, title, filesize, filesizeF } = yt
        let isLimit = (limit) * 1024 < filesize  
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : 'compressing...')
        await conn.sendButtonLoc(m.chat, await (await fetch (thumb)).buffer(), `*ＹＴＭＰ3 ＹＯＵＴＵＢＥ*
  *Title:* ${title}
  *Size:* ${filesizeF}
  _FILE AUDIO SEDANG DIMUAT_`, userbot.packname, 'VIDEO', `video ${m.text}`, m)
        if (!isLimit) conn.sendFile(m.chat, dl_link, title + ".mp3", null, m)
 }
    if (/^https?:\/\/.*vt/i.test(m.text)) {
     let ttdata = await tiktok(m.text)
     conn.sendMessage(m.chat, await (await Ft.fetch(ttdata.result.nowm)).buffer(),"videoMessage",{quoted:m})
   }   
    if (/^https?:\/\/.*facebook/i.test(m.text)) {
     const v = await fbdl(m.text)
     conn.sendFile(m.chat, v.hasil.link_high, 'fb.mp4', `\n*Berhasil Mendapatkan Video*\n\n⬇️Post by ${v.hasil.author}\n📖desk: ${v.hasil.title}`, m)
   }
    if (/^https?:\/\/.*twitter/i.test(m.text)) {
    var res = await fetch(`https://rizapi.herokuapp.com/api/twitter?url=${m.text}`)
    let json = await res.json()
    conn.send3Button(m.chat,`*Twitter Downloader*\n Pilih type dibawah`, userbot.prefix, `HD`, `thd ${m.text}`, `SD`, `tsd ${m.text}`, `AUDIO`, `taudio ${m.text}`, m)
   }
    if (/^https?:\/\/.*instagram/i.test(m.text)) {
   let { igvideo, igfoto } = require("../../Lib/scrape")
   await igvideo(m.text).then(res => {
   conn.sendFile(m.chat, res.link, null, null, m)
   })
   }
    if (/^https?:\/\/.*www86.zippyshare/i.test(m.text)) {
    const getLink_zippy = await GetLink(m.text)
    if(getLink_zippy.error) return m.reply(`ERROR!\n\nErr : ${getLink_zippy.message}`)
    try {
    name = getLink_zippy.name.split(".")
    nama = name[name.length -1]
    conn.sendFile(m.chat, getLink_zippy.url, "", "", m, false, { filename: getLink_zippy.name, mimetype: nama == "mp4" ? Mimetype.mp4 : nama == "pdf" ? Mimetype.pdf : nama})
    } catch (e) {
    m.reply("EROR OM SIZENYA NGELEBIHI TOS WHATSAPP")
    console.log(e)
    }
   }
}
}
//Madeby Rizxyu
