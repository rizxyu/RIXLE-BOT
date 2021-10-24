module.exports = {
name: ["start"],
type: ['anonymous chat'],
description: "anonymous chat seperti telegram",
utilisation: global.userbot.prefix+ "start",

async execute(m) {

if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, 'Kamu masih berada di dalam anonymous chat, menunggu partner...\n\nKetik ${userbot.prefix}leave untuk berhenti\natau menekan button dibawah ini', userbot.author, 'LEAVE', `${userbot.prefix}leave`, m)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.send2Button(room.a, 'Partner ditemukan!\n\n${userbot.prefix}next : Untuk skip\n${userbot.prefix}leave : Untuk berhenti\n\natau kamu dapat menekan button dibawah', userbot.author, 'NEXT', `${userbot.prefix}next`, 'LEAVE', `${userbot.prefix}leave`, m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.send2Button(room.a, 'Partner ditemukan!\n\n${userbot.prefix}next : Untuk skip\n${userbot.prefix}leave : Untuk berhenti\n\natau kamu dapat menekan button dibawah', userbot.author, 'NEXT', `${userbot.prefix}next`, 'LEAVE', `${userbot.prefix}leave`, m)
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
                await this.sendButton(m.chat, 'Menunggu partner...\n\nKetik ${userbot.prefix}leave untuk berhenti\natau menekan button dibawah ini', userbot.author, 'LEAVE', `${userbot.prefix}leave`, m)
            }
        }
    }
