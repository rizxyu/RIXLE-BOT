//PUT YOUR MODULE IN HERE ↓↓↓
//THANKS TO DENTA INTO CREATE COVID WITH IMAGE
const util = require("util")
const path = require ("path")
const Jimp = require("jimp")
const request = require("request-promise")

module.exports = {
name: ["covid"],
description: "melihat informasi covid di beberapa wilayah di dunia",
utilisation: `${userbot.prefix}covid <country_name>\n${userbot.prefix}covid negara\n${userbot.prefix}covid rank`,
type: ["searching"],

async execute(m) {
	let usedPrefix = userbot.prefix
	let {conn, args, command} = data
    const reply = (sket) => {
        conn.sendMessage(m.chat, sket, mediaType.text, {
            quoted: m
        })
    }
    
    const numbex = function (angka) {
        if (typeof angka != "number") return (angka)
        angks = `${angka}`.split("").reverse()
        let ans = 0
        let amnj = saya = angks.length
        while (3 < amnj) {
            amnj = amnj - 3
            ans ++
        }
        while (ans > 0) {
            angks.splice((ans * 3), 0, ".")
            ans --
        }
        return angks.reverse().join("")
    }


    try {
        if (args.length == 0) {
            reply(`Untuk mengetahui nama negara, ketik "${usedPrefix}${command} negara"`)
            return
        }
        let kontri = args.join(" ").toLowerCase()
        let linko

        if (kontri.includes("indonesia") && kontri.startsWith("indonesia")) {
            linko = "https://api.kawalcorona.com/indonesia/"
        } else {
            linko = "https://api.kawalcorona.com/"
        }

        let kraw = await request.get(linko)
        let kres = JSON.parse(kraw)

        let rraw = await request.get("https://api.kawalcorona.com/")
        let rres = JSON.parse(rraw)

        const covid = {
            country: null,
            rank: NaN,
            all: NaN,
            active: NaN,
            recovered: NaN,
            death: NaN
        }

        if (args[0].toLowerCase() == "negara") {
        	m.reply('tunggu sebentar ya kak lagi proses')
            let objk = []
            for (i in kres) {
                objk.push(kres[i].attributes.Country_Region)
            }
            objk = objk.sort()
            let cres = ""
            for (i in objk) {
                cres += "\n" + objk[i]
            }
            reply("list negara: \n" + cres)
            return
        }
        
        if (args[0].toLowerCase() == "rank") {
        	m.reply('tunggu sebentar ya kak lagi proses')
            let objk = ""
            let anux = 1
            for (i in kres) {
                objk += `\n#${anux} > ${kres[i].attributes.Country_Region} => Confirmed: ${kres[i].attributes.Confirmed}, Death: ${kres[i].attributes.Deaths}`
                anux ++
            }
            reply("Rank Covid\n" + objk)
            return
        }

        if (kontri.includes("indonesia") && kontri.startsWith("indonesia")) {
            covid.country = "Indonesia"
            covid.all = kres[0].positif
            covid.active = kres[0].dirawat
            covid.recovered = kres[0].sembuh
            covid.death = kres[0].meninggal
        } else {
            position = false
            for (i in kres) {
                if (kres[i].attributes.Country_Region.toLowerCase() === kontri) {
                    position = i
                }
            }
            if (position) {
                covid.country = kres[position].attributes.Country_Region
                covid.all = kres[position].attributes.Confirmed
                covid.active = kres[position].attributes.Active
                covid.recovered = kres[position].attributes.Recovered
                covid.death = kres[position].attributes.Deaths
            } else {
                return reply(`Data dari negara tesebut tidak ada, mungkin salah ketik atau database error. jika salah ketik, coba untuk "${usedPrefix}${command} negara`)
            }
        }
        
        let ankx = 1
        for (i in rres) {
            if (rres[i].attributes.Country_Region.toLowerCase() === kontri) {
                covid.rank = ankx
            }
            ankx ++
        }

        let image = await Jimp.read(path.join(__dirname, "..", "/..", "/src/", "/image/covid.png"))
        //Load File
        font = await Jimp.loadFont(path.join(__dirname, "..", "/..", "/src/font/Montserrat-Mid.ttf.fnt"))
        //Print Text On Image
        image.print(font, 388, 175, {
            text: `${covid.country}`
        }, 2000, 500) //Country
        image.print(font, 388, 250, {
            text: `#${numbex(covid.rank)}`
        }, 2000, 500) //Rank
        image.print(font, 530, 333, {
            text: `${numbex(covid.all)}`
        }, 2000, 500) //Total Case
        image.print(font, 580, 420, {
            text: `${numbex(covid.active)}`
        }, 2000, 500) //Active Case
        image.print(font, 580, 505, {
            text: `${numbex(covid.recovered)}`
        }, 2000, 500) //Recovered
        image.print(font, 580, 590, {
            text: `${numbex(covid.death)}`
        }, 2000, 500) //Deaths

        let teks = `Dominance Bot`
        + `\n` + ``
        + `\n` + `Covid-19`
        + `\n` + `Country: ${covid.country}`

        image = await image.getBufferAsync("image/png")
        conn.sendMessage(m.chat, image, mediaType.image, {
            mimetype: "image/png", quoted: m, caption: teks
        })
    } catch (e) {
        reply(util.format(e))
        console.log(e)
    }
}
}
