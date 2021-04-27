const express = require('express');
const route = express.Router();

route.get('/r1', function(req, res){
    res.send('hello / p2 / r1')
});
route.get('/r2', function(req, res){
    res.send('hello / p2 / r2')
});

//라우트를 모듈로 반환
module.exports = route