const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

module.exports = {
name: ["tr"],
type: ["searching"],
description: "mentranslate teks",
utilisation: userbot.prefix + "tr reply",

async execute(m) {
let { conn, args } = data

let err = `
Contoh:
${userbot.prefix}tr <lang> [text]
${userbot.prefix}tr id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        return m.reply(err)
    } finally {
        m.reply(result[0])
    }
}
}
