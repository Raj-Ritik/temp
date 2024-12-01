// to create and read files

/*fs.writeFileSync (Synchronous)

    Blocking:
        Executes the file operation synchronously.
        Blocks the event loop until the operation completes, meaning no other code runs during this time.

    Usage:
        Does not require a callback function.
        Simpler to use but may reduce performance in applications where non-blocking behavior is critical.*/

const fs = require('fs')
// we can also write in destructure way {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')
const SvSk = fs.readFileSync('./content/subfolder/text.txt', 'utf8')

// console.log(first);
// console.log(second);

// creating a file and writing in it
fs.writeFileSync(
  './content/result-sync.txt',//location of file which u created or location of exisiting file where u want to write
  `Here is the result : ${first}, ${second}`, // what u want to write
  { flag: 'a' } //this parameter is used when there is already something present in file and you want to append new
)

console.log("Done")
console.log("Start Next")

