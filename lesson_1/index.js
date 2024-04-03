const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
try {
        const pathToFile = path.join(__dirname, req.url)
        const myFileContent = fs.readFileSync(pathToFile)
        res.end(myFileContent);
}
catch (e) {
    console.log(e);
    res.end('File not found')
}
})
// слушатель порта
server.listen(8080)
