import http from 'http'

const host = '127.0.0.1'
const port = 8000

const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end('Hello')
})

server.listen(port, host, () => {
  console.log('work')
})
