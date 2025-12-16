const http = require('http');
const server = http.createServer((req, res)=> {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>안녕하세요, Node.js 서버입니다!</h1>');
})

const PORT=3000;
server.listen(PORT, ()=>{
    console.log('서버가 http://localhost:${PORT}에서 실행중입니다.');
})