const os = require('os')

// info about all the users;

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(os.uptime())
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
