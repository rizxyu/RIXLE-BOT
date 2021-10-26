
module.exports = {
name: ["wangy"],
type: ["fun"],
description: "wangi wangi huha huha",
utilisation: userbot.prefix + "wangy <namakarakter>",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('contoh' + userbot.prefix + command + 'keqing')

let caption = `
${text} ${text} ${text} ❤ ❤ ❤ WANGY WANGY WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya ${text} wangi aku mau nyiumin aroma wanginya ${text} AAAAAAAAH ~~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~ AAAAAH ${text} ❤ ❤ ❤   manis banget AAAAAAAAH TATAPAN ${text} BEGITU MENGGODAAAAAAAAA............ GUA RELA JADI BUDAK SIMP HANYA DEMI ${text} TERDJINTA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH apa ? ${text} itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ${text} ngeliat gw ... ${text} NGELIATIN GW! ${text}... kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} gak malu memiliki aku aaaaaah ❤ ❤ ❤ YEAAAAAAAAAAAH GUA MASIH PUNYA ${text}, ${text} AKU SAYANG ${text} AKU CINTA ${text} AKU AKU INGIN ${text} MENJADI BIDADARIKUUUUUUU!!!!!!!!!!!!! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGH!!!!!!!!!!!!!!!!!!!!!!
`
m.reply(caption)

}
}
