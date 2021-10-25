const fs = Ft.fs

let yts = require('yt-search')
let axios = require('axios')
let fetch = require('node-fetch')

module.exports = {

name: "music2",
command: ["music2"],
type: ["download"],
useLimit: true,
description: "Download and searching music dri YouTube",
utilisation: userbot.prefix + "music2 <query>",

async execute(m) {

let { conn, text } = data
if (!text) return m.reply('Mau Cari Apa?')
axios.get(`https://api.zeks.me/api/yts?apikey=FearTeamWibu&q=${text}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return m.reply("Pencarian Anda Tidak di Temukan")
			secs = []
			xres.data.result.splice(10, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `audio ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `audio ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = conn.prepareMessageFromContent(m.chat, {
				  "listMessage":{
                  "title": "*YOUTUBE MUSIC*",
                  "description": `*Result for : ${text}*\n*Download video by click button bellow*`,
                  "footerText": userbot.packname,
                  "buttonText": "KLICK ME",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            conn.relayWAMessage(po, {waitForAck: true})
			})
}
}
