module.exports = {
  name: ["sepia"],
  type: ["image"],
  description: "make sepia images",
  utilisation: userbot.prefix+"sepia",
  
  async execute(m){
    var input = getRandom('.png')
    var output = getRandom(".png")
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (/image/.test(mime)) {
    Ft.fs.writeFileSync(input,await q.download())
    var jInpt = Ft.Jimp.read(input)

Promise.all([jInpt]).then(function(images){
  const a = images[0];
  a
  .sepia()
  .quality(60)
  .background(0)
  .resize(256, Ft.Jimp.AUTO)
  .write(output, (err)=>{
    if(err){
     console.log(err)
    } else {
      conn.sendFile(m.chat,Ft.fs.readFileSync(output), output,"y")
    }
  })
}).catch(e=> console.log(e) && m.reply("Error!"))
} 
else m.reply("Balas image yang ingin di ubah dengan caption *"+botuser.prefix+"sepia*")
}
}
function getRandom(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
