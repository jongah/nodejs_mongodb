
//라우트를 모듈로 반환 및 변수 전달
module.exports = function(app){
    const express = require('express');
    const route = express.Router();

    route.get('/r1', function(req, res){
        res.send('hellow world')
    });
    route.get('/r2', function(req, res){
        res.send('hello / p1 / r2')
    });
    return route;
}