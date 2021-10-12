let imageToBase64 = require('image-to-base64');
let axios = require("axios");

module.exports = {
name: ["anime"],
type: ["random"],
useLimit: true,
description: "image random anime",
utilisation: userbot.prefix + "anime",

async execute(m) {
let { conn } = data

await m.reply('Searching...')
let items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    let cewe = items[Math.floor(Math.random() * items.length)];
    let url = "http://fdciabdul.tech/api/pinterest/?keyword=" + cewe;
    let str = `
Nih Anime
Cantik Kan? 
`.trim()

    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); // Ta-da

    conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
}
}
