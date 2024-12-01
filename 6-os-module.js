// os module(in-built module) --> operating system
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
/* console.log(`The system uptime is ${os.uptime()} seconds`) */
const uptimeInSeconds = os.uptime();
const days = Math.floor(uptimeInSeconds / (24 * 3600));
const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = uptimeInSeconds % 60;

console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
