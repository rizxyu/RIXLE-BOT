"use strict"

const googleImage = require('g-i-s')
const moment= require('moment-timezone')
const fs  = require('fs')
const path = require('path')
const yargs  = require('yargs/yargs')
const yts= require( 'yt-search')
const chalk = require('chalk')
const fetch  = require('node-fetch') 
const ggs  = require('google-it') 
const axios  = require('axios')
const syntaxerror = require('syntax-error');
const request  = require('request')
const util = require('util')
const ffmpeg= require('fluent-ffmpeg')
const speed  = require('performance-now')
const os = require('os')
const Cfonts = require('cfonts')
const { fetchBase64, fetchText, fetchJson } = require('./fetcher.js')
const {
 spawn,
exec,
execSync 
} = require('child_process')
const { 
 color,
  bgcolor 
} = require('./color.js')
const { banner, start, success } = require('./banner.js')

exports.Functions = class Functions {
constructor() {
this.color = color
this.bgcolor = bgcolor
this.spawn = spawn
this.chalk = chalk
this.syntaxerror = syntaxerror
this.Cfonts = Cfonts
this.os = os
this.path = path
this.exec = exec
this.speed = speed
this.banner = banner
this.util = util
this.fetchText = fetchText
this.fetchBase64 = fetchBase64
this.ffmpeg = ffmpeg
this.request = request
this.axios = axios
this.ggs = ggs
this.fetch = fetch
this.yts = yts
this.yargs = yargs
this.path = path
this.fs = fs
this.moment = moment
this.googleImage = googleImage
}

Res(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = this.util.format(objectString)
if (objectString == undefined) {
parse = this.util.format(objectPromise)
}
return parse
}

count(s) {
  s = Number(s);
  var d = Math.floor(s / (3600 * 24));
  var h = Math.floor(s % (3600 * 24) / 3600);
  var m = Math.floor(s % 3600 / 60);
  var s = Math.floor(s % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " Hari ,":" Hari,") : ""
  var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam,") : " 00 Jam "
  var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit ") : " 00 Menit "
  var sDisplay = s > 0 ? s + (s == 1 ? "  Detik, ":" Detik ") : ""
  return dDisplay + hDisplay + mDisplay + sDisplay
}
async starts(conn, session = '.') {
conn.version = [2, 2140, 12];
conn.logger.level = "warn"
conn.regenerateQRIntervalMs = 50000;
console.log(banner.string)
if (this.fs.existsSync(session)) conn.loadAuthInfo(session);
conn.on('qr', qr => generate(qr, { small: false}))
conn.on('connecting', async () => {
console.log(this.chalk.blueBright.italic('✅ Login information updated!'))
});
conn.on('open', async () => { 
console.log(this.chalk.green.bold('✅ Login successful!'))
}); 
await this.fs.writeFileSync(session, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t')) 
}

nocache(module) {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
 } catch (e) {
reject(e)
}
})
}

async getBuffer(url, options) {
	try {
		options ? options : {}
		let res = await this.axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

async custom(imageUrl, top, bottom) {
 new Promise((resolve, reject) => {
    let topText = top.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    let bottomText = bottom.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    this.getBuffer(`https://api.memegen.link/images/custom/${topText}/${bottomText}.png?background=${imageUrl}`)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
}
 multiRegex(...args) {
  let tmp = "";
  for(let string of args) {
    if(string != args[args.length - 1]) {
      tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&') + "|";
    } else {
      tmp += string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }
  }
  return tmp
}


async plugins() {
var pluginFolder = this['path'].join(__dirname, '../commands');
var pluginFilter = filename => /\.js$/.test(filename);
 global.plugins = {}
for (var filename of this['fs'].readdirSync(pluginFolder).filter(pluginFilter)) {
try {
global.plugins[filename] = require(this['path'].join(pluginFolder, filename));
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}
}
console.log(Object.keys(global.plugins));
global.reload = (_event, filename) => {
if (pluginFilter(filename)) {
var dir = this['path'].join(pluginFolder, filename);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${filename}' is update`);
if (this['fs'].existsSync(dir));
else {
conn.logger.warn(`deleted plugin '${filename}'`);
return delete global.plugins[filename];
}
} else conn.logger.info(`MENAMBAH PLUGIN '${filename}'`);
var err = this.syntaxerror(this['fs'].readFileSync(dir), filename);
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`);
else try {
global.plugins[filename] = require(dir);
} catch (e) {
conn.logger.error(e);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}
}
} 
Object.freeze(global.reload);
this['fs'].watch(this['path'].join(__dirname, '../commands'), global.reload);
}

parseRegex(string) {
return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

async action() {
var pluginFolder = this['path'].join(__dirname, '../action');
var pluginFilter = filename => /\.js$/.test(filename);
global.pluginss = {}
for (var filename of this['fs'].readdirSync(pluginFolder).filter(pluginFilter)) {
try {
global.pluginss[filename] = require(this['path'].join(pluginFolder, filename));
} catch (e) {
conn.logger.error(e);
delete global.pluginss[filename];
}
}
console.log(Object.keys(global.pluginss));
global.reloadd = (_event, filename) => {
if (pluginFilter(filename)) {
var dir = this['path'].join(pluginFolder, filename);
if (dir in require.cache) {
delete require.cache[dir];
console.log(`now '${filename}' is update`);
if (this['fs'].existsSync(dir));
else {
conn.logger.warn(`deleted plugin '${filename}'`);
return delete global.pluginss[filename];
}
} else conn.logger.info(`requiring new plugin '${filename}'`);
var err = this.syntaxerror(this['fs'].readFileSync(dir), filename);
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`);
else try {
global.pluginss[filename] = require(dir);
} catch (e) {
conn.logger.error(e);
} finally { 
global.pluginss = Object.fromEntries(Object.entries(global.pluginss).sort(([a], [b]) => a.localeCompare(b)));
}
}
} 
Object.freeze(global.reloadd);
this['fs'].watch(this['path'].join(__dirname, '../action'), global.reloadd);
}




 start(file) {
  let args = [this.path.join(__dirname, file), ...process.argv.slice(2)]
  this.Cfonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = this.spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    this.fs.watchFile(args[0], () => {
      this.fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
}
