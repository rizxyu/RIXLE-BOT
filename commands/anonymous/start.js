module.exports = {
name: ["start"],
type: ['anonymous chat'],
description: "anonymous chat seperti telegram",
utilisation: global.userbot.prefix+ "start",

async execute(m) {

if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', userbot.author, 'Keluar', `.leave`)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_Partner ditemukan!_', userbot.author, 'Next', `.next`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, '_Partner ditemukan!_', userbot.author, 'Next', `.next`, m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Menunggu partner..._', userbot.author, 'Keluar', `.leave`, m)
            }
        }
    }
