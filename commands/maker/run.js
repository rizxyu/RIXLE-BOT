let { spawn } = require("child_process"),
    path = require("path")
module.exports = {
  name: ["run"],
  type: ["maker"],
  description: "make text that doesn't move into motion",
  utilisation: userbot.prefix+"run",
  async execute(m){
  let d = m.text.slice(5) || 10
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/.test(mime)) throw `Balas gambarnya/reply gambarnya`
  try { q = m.quoted.download() }
  catch (e) { q = m.download() }
  m.reply('_Sedang membuat..._')
  running(await q, d).then(vid => conn.sendFile(m.chat, vid, 'run.mp4', 'Done', m))
  }
}

function running(img, duration = 10, fps = 60) {
  return new Promise((resolve, reject) => {
    let layers = [
      `color=s=512x512:d=${duration}:r=${fps}[bg]`,
      '[0:v]scale=-2:512[img]',
      `[bg][img]overlay=x='(w+h)*((n/${fps})*-1/${duration})+h'`
    ]

    let n = + new Date + 'run.jpg'
    let i = path.join(tmp, n)
    Ft.fs.writeFileSync(i, img)
    console.log(img)
    let o = path.join(tmp, n + '.mp4')
    let args = [
      '-y',
      '-i', i,
      '-t', duration.toString(),
      '-filter_complex', layers.join(';'),
      '-pix_fmt', 'yuv420p',
      '-crf', '18',
      o
    ]
    spawn('ffmpeg', args, { stdio: 'inherit' })
      .on('error', reject)
      .on('close', () => {
        try {
          Ft.fs.unlinkSync(i)
          resolve(Ft.fs.readFileSync(o))
          Ft.fs.unlinkSync(o)
        } catch (e) {
          reject(e)
        }
      })
  })
}
