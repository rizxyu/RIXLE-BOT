const fetch = require('node-fetch');
const cheerio = require('cheerio');

const Nekopoi = async (url) => {
  return new Promise(async (resolve, reject) => {
    try{
      const response = await fetch(url);

      const body = await response.text();

      const $ = cheerio.load(body);
      const links = [];
	  
      const soup = $;
      let title = soup("title").text();
      soup('div.liner').each(function(i, e) {
        soup(e).find('div.listlink').each(function(j, s) {
          links.push(soup(s).find('a').attr('href'))
        });
      });
      const data = {
        "title": title,
        "links": links
      };
      await resolve(data);
    }catch(e){
      reject(e)
    }
  })
};

module.exports = {
name: ["nekopoi"],
type: ["information"],
description: "wikipedia get information",
utilisation: userbot.prefix + "nekopoi <url>",


async execute(m) {
let { conn, text } = data
if (!text) return conn.reply(m.chat, 'query?', m)
Nekopoi(url)
.then((data) => {
let txt = `*「 HASIL PENCARIAN 」* \n\n*Title*: ${data.title}\n\n*Hasil*: ${data.links}`
conn.sendFile(m.chat, `${data.thumb}`, "", txt, m)
})
}
}
