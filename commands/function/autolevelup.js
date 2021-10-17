let levelling = require('../../Lib/leveling')

module.exports = { 
name: "autolevelup",  
async functions(m) { 

let user = db.user[m.sender]
        let users = Object.entries(db.user).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pp = './src/avatar_contact.png'
        let who = m.sender
        let discriminator = who.substring(9, 13)
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, userbot.gexp)
        try {
                pp = await this.getProfilePicture(who)
        } catch (e) {

        } finally {

                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, userbot.gexp)) user.level++

                if (before !== user.level) {
                        let rank = await new canvacord.Rank()
                                .setRank(usersLevel.indexOf(m.sender) + 1)
                                .setAvatar(pp)
                                .setLevel(user.level)
                                .setCurrentXP(user.exp - min)
                                .setRequiredXP(xp)
                                .setProgressBar("#f2aa4c", "COLOR")
                                .setUsername(this.getName(who))
                                .setDiscriminator(discriminator);
                        rank.build()
                                .then(async data => {
                                        await this.sendButImg(m.chat, data, `_*Level Up!*_\n_${before}_ -> _${user.level}_`.trim(), 'Bot BY RIZKY ADI', 'Daily', 'daily')
                                })
                }
        }
}
}

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}
