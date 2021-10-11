const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["tes"],
type: ["default"],
description: "menampilkan command",
utilisation: "#tes",

  async execute(m) {
let { conn } = data

conn.sendButImg(m.chat, await ( await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1pVfdb1zUoSve4Unc08jl5BpCHwfys8qxA&usqp=CAU')).buffer(), `apa`, `g`, `kok`, `y`, m)

  }
}