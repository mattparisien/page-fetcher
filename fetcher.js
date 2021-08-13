const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  fs.writeFile(path, body, 'utf8', (error) => {
    if (error) throw error;
    fs.stat(path, (err, stats) => {
      if (error) throw error;
      console.log(`File has been successfully written and is ${stats.size} bytes!`)
    })
  })
})

console.log('Loading...')