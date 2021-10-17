let scrap = require("../../Lib/scrape")
module.exports = {
name: ["ghstalk"],
type: ["searching"],
description: "search username from github.com",
utilisation: userbot.prefix+"ghstalk",

async execute(m){
let { conn, text } = data
if (!text) return m.reply("Username?")

const { login, id, avatar_url, url, html_url, followers_url, following_url, subscriptions_url, repos_url, type, site_admin, location, email, bio, public_repos, public_gists, following, followers, created_at, updated_at } = await scrap.ghstalk(text)
conn.sendFile(m.chat, avatar_url, null,`*GITHUB STALK*\n
username: ${login}
id: ${id}
url: ${html_url}
user_url: ${url}
type: ${type}
admin: ${site_admin ? "ya" : "tidak"}
location: ${location}
email: ${email}
repo: ${public_repos}
gists: ${public_gists}
followers: ${followers}
following: ${following}
create: ${created_at}
update: ${updated_at}
`,m)

}
}
//SANZ KONTOL SETENGAH SETENGAH
