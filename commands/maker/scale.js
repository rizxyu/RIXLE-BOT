module.exports = {
  name: ["scale"],
  type: ["image"],
  description: "make scale images",
  utilisation: userbot.prefix+"scale",
  
  async execute(m){
    var input = "a.png"
    var output = "b.png"
    Ft.fs.writeFileSync(input,await m.quoted.download())
    var jInpt = Ft.Jimp.read(input)

Promise.all([jInpt]).then(function(images){
  const a = images[0];
  a
  .scale(3)
  .quality(60)
  .background(0)
  .write(output, (err)=>{
    if(err){
     	console.log(err)
    } else {
      conn.sendFile(m.chat,Ft.fs.readFileSync(output), output,"y")
    }
  })
}).catch((e) => console.log(e) && client.reply("Error!"))
  }
}
