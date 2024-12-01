/*fs.writeFile / readFile(Asynchronous)

    Non-Blocking:
        It performs the file operation asynchronously.
        Does not block the event loop, allowing other operations to run in parallel.

    Usage:
        Takes a callback function to handle success or errors.
        Recommended for production environments to ensure the application remains responsive.*/


const fs = require('fs')

console.log("Start")

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      './content/result-async.txt',
      `here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done")
      }
    )
  })
})
console.log("Start Next")

/*When to Use Which?

    Use fs.writeFile when:
        You need non-blocking behavior.
        You're developing a production-grade application where performance matters.

    Use fs.writeFileSync when:
        You're writing small scripts, testing, or debugging.
        Blocking the event loop briefly won’t affect your application.*/