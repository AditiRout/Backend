const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/result.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(`./content/first.txt`);
  stream.pipe(res);
});
server.listen(3000);
