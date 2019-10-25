var express = require('express'); //설치한 express module을 불러와서 변수(express)에 담는다.
var app = express(); //express를 실행하여 app object를 초기화

// app.get('/', function(req,res) { // '/'위치에 'get'요청을 받은 경우,
//     res.send('Hello World!'); //"Hello World!"를 보낸다.
//     //console.log(req);
// });

app.use(express.static(__dirname + '/public')); // '현재위치/public' route를 static폴더로 지정하라는 명령어. 
//즉 '/'에 접속하면 '현재위치/public'을 연결한다.

app.listen(3000, function() { //3000번 포트를 사용한다.
    console.log('Server on!'); //서버가 실행되면 콘솔창에 표시될 메시지.
})