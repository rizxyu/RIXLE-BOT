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
global.Functions = {}
global.Events = {}

readdirSync('./commands/').forEach(dirs => {
let commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
for (let file of commands) {
const command = require(`../commands/${dirs}/${file}`);
if ("functions" in command) {
global.Functions[command.name] = command
console.log(Ft.color(`-> Loaded Functions`, 'cyan') + Ft.color(` ${command.name}`, 'red'));
} else {
 global.Events[command.name] = command
console.log(Ft.color(`-> Loaded command`, 'orange') + Ft.color(` ${command.name}`, 'yellow'));
}
require(`../commands/${dirs}/${file}`)
nocache(`../commands/${dirs}/${file}`, module => { 
if ("functions" in command) {
try {
console.log(`function '${file}' Was Updated!`);
global.Functions[command.name] = command
} catch (e) {
console.log(e)
delete global.Functions[command.name]
}
} else {
try {
console.log(`'${file}' Was Updated!`);
global.Events[require(`../commands/${dirs}/${file}`).name] = require(`../commands/${dirs}/${file}`)
} catch (e) {
console.log(e)
delete global.Events[command.name]
}
}
});
};
});


