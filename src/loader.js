const { readdirSync } = require('fs');

const uncache = (module) => {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (err) {
reject(err)
}
})
}

const nocache = (module, call = () => { }) => {
Ft.fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
call(module)
})
}
global.Events = {}

readdirSync('./commands/').forEach(dirs => {
let commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
for (let file of commands) {
let command = require(`../commands/${dirs}/${file}`);
console.log(Ft.color(`-> Loaded command`, 'orange') + Ft.color(` ${command.name}`, 'yellow'));
global.Events[command.name] = command
require(`../commands/${dirs}/${file}`)
nocache(`../commands/${dirs}/${file}`, module => { 
try {
console.log(`'${file}' Was Updated!`);
global.Events[require(`../commands/${dirs}/${file}`).name] = require(`../commands/${dirs}/${file}`)
} catch (e) {
console.log(e)
delete global.Events[command.name]
}
});
};
});


