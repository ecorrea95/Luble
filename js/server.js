const http = require('http')
const fs = require('fs')
const port = 8000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': HTML_CONTENT_TYPE })
    fs.readFile('./index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log("Algo salió mal", error)
    } else {
        console.log("Server en " + port)
    }
})