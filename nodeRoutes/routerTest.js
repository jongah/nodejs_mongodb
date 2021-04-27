const express = require('express');
const app = express();

//https://opentutorials.org/module/2026/12445 생활코딩

// 서버를 어디에 열지 ()
app.listen(7000, function(){
    console.log('listening on 7000');
});

//require 함수
const p1 = require('./routes/p1')(app);
app.use('/p1', p1);

const p2 = require('./routes/p2');
app.use('/p2', p2);

// 페이지 내에서 이용
// p1으로 들어오는 접속은 모두 router에 위임
// const router = express.Router();
// app.use('/p1', router);

// router.get('/r1', function(req, res){
//     res.send('hello / p1 / r2')
// });
// router.get('/r2', function(req, res){
//     res.send('hello / p1 / r2')
// });

// 응용
// 1. 라이터 객체 생성
// 2. app(express)에 라우터 등록
// 3. 라우터를 통해 get등록
// const p1 = express.Router();
// app.use('/p1', p1)
// p1.get('/r1', function(req, res...))
