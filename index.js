/*
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
*/

//ejs
var express = require('express');
var app = express();

//1. ejs를 사용하기 위해 express의 view engine에 ejs를 set
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//2. query를 통해서 이름을 받는다. 모든 쿼리를 req.query에 저장된다.
app.get("/hello", function(req,res) {
    res.render("hello", {name:req.query.nameQuery});
});

//3. route parameter를 통해 이름을 받는다. :으로 시작되는 route 해당부분에 입력되는 route 텍스트가 req.params에 저장된다.
app.get("/hello/:nameParam", function(req,res) {
    res.render("hello", {name:req.params.nameParam});
});

app.get("/today", function(req,res) {
    res.render("today", {day:req.query.dayQuery});
});

app.get("/today/:dayParam", function(req,res) {
    res.render("today", {day:req.params.dayParam});
});

app.listen(3000, function() {
    console.log('Server on!!!');
});

