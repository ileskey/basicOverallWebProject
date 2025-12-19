const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('메인 페이지입니다.');
})

app.get('/about', (req, res)=>{
    res.send('소개 페이지입니다.');
})

app.get('/user/:id', (req, res)=>{
    res.send(`사용자 ID: ${req.params.id}`);
})

app.get('/search', (req, res)=>{
    res.send(`검색어: ${req.query.q}`);
})

app.listen(3000, ()=>{
    console.log('서버가 3000포트에서 실행되고 있습니다.');
})