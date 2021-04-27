const express = require('express');
const app = express();

// 서버를 어디에 열지 ()
app.listen(7000, function(){
    console.log('listening on 7000');
});

// 누군가가 /경로 로 방문을 하면 관련 동작 시행
// app.get('경로', function(요청, 응답){
//     응답.send('반갑습니다.')
// })

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

app.get('/write.html', function(요청, 응답){
    응답.sendFile(__dirname + '/write.html');
});

