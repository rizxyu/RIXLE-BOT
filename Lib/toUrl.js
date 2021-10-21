const fs = require('fs');
const { fromBuffer } = require('file-type')
const __path = process.cwd()
const FormData = require("form-data")
const axios = require('axios');
const { tmpdir } = require('os');
const path = require('path')
const Crypto = require("crypto")
const tmp = path.join(
    tmpdir(),
    `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}`
);
function bufferToPath(buffer) {
    if (!Buffer.isBuffer(buffer)) return console.log('do not a buffer')
    return new Promise (async(resolve, reject) => {
const cek_file = await fromBuffer(buffer)
fs.writeFile(tmp+`.${cek_file.ext}`, buffer, (e, f) => {
    if (e) return console.log(e)
    resolve(fs.createReadStream(tmp+`.${cek_file.ext}`))
})
    })
}

// async function uploadFile(buffer) {
// return new Promise(async(resolve, reject) => {
//     const cek_file = await fromBuffer(buffer)
//     fs.writeFileSync(tmp+`.${cek_file.ext}`, buffer)
//         const bodyForm = new FormData();
//         bodyForm.append('recfile', fs.createReadStream(tmp+`.${cek_file.ext}`))
//         await axios(`https://uploader.hardianto.xyz/upload`,{
//             method: 'POST',
//             data: bodyForm,
//             headers: {
//                 "accept": "*/*",
//                 "accept-language": "en-US,en;q=0.9,id;q=0.8",
//                 "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
//             }
//         }).then(({ data }) => {
//         resolve(data.file)    
//     }).catch(e => reject(e))
// })

// }

function toUrl(path) {
    return new Promise(async(resolve, reject) => {
        const isbuf = await Buffer.isBuffer(path) ? await bufferToPath(path) : fs.createReadStream(path)
        const bodyForm = new FormData()
        bodyForm.append('recfile', isbuf)
        await axios(`https://uploader.hardianto.xyz/upload`,{
            method: 'POST',
            data: bodyForm,
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
            }
        }).then(({ data }) => {
            console.log(data.file)
            resolve(data.file)

    }).catch(e => console.log(e))
    })
}
        
module.exports = {toUrl}
