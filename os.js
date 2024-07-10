const { log } = require('console');
const os = require('os')
const user = os.userInfo();
console.log(user)
console.log(os.uptime());


const info = {
    name : os.type(),
    system : os.release(),
    totalmemory : os.totalmem(),
    freememory: os.freemem(),
}

console.log(info)