const {default: fetch} = require("node-fetch")
const { toUrl } = require("./toUrl")
/**
 * Meta Data Exif
 * @typedef {Object} StickerMetadata
 * @property {String} [name] name sticker 
 * @property {String} [author] author sticker
 * @property {Boolean} [crop] type sticker
 */
/**
 * format sticker  
 * @param {Buffer} buffer buffer
 * @param {String} url url
 * @param {StickerMetadata} metadata meta data
 * @returns {Promise<Buffer>}
 */
async function sticker(buffer, url = false, metadata) {
     const url_or_buffer = url ? url : await toUrl(buffer)
     let data = await fetch('https://xosfor.herokuapp.com/api/sticker-api', {
        method: "POST",
        body: new URLSearchParams(Object.entries({
            name: metadata.name,
            author: metadata.author,
            file: url_or_buffer,
            crop: metadata.crop || false

        }))
    }).then(v => v.buffer())
    return data
}
// upcoming 

module.exports = {
    sticker,

}
