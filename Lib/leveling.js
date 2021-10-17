module.exports = {
    
    growth: Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75,
 
    xpRange(level, gexp = userbot.gexp || 1) {
        if (level < 0) return new TypeError('level cannot be negative value')
        level = Math.floor(level)
        let min = level === 0 ? 0 : Math.round(Math.pow(level, this.growth) * gexp) + 1
        let max = Math.round(Math.pow(++level, this.growth) * gexp)
        return {
            min,
            max,
            xp: max - min
        }
    },
    findLevel(xp, gexp = userbot.gexp || 1) {
        if (xp === Infinity) return Infinity
        if (isNaN(xp)) return NaN
        if (xp <= 0) return -1
        let level = 0
        do level++
        while (this.xpRange(level, gexp).min <= xp)
        return --level
    },
    /**
     * is able to level up?
     * @param {Number} level 
     * @param {Number} xp 
     * @param {Number} geexp 
     */
    canLevelUp(level, xp, gexp = userbot.gexp || 1) {
        if (level < 0) return false
        if (xp === Infinity) return true
        if (isNaN(xp)) return false
        if (xp <= 0) return false
        return level < this.findLevel(xp, gexp)
    }
}
