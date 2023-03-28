// 이 파일은 프로젝트의 진입점 entry point = 앱파일

const express = require('express')
const expressHandlebars =require('express-handlebars')
const app = express()
const port =process.env.PORT || 3000


//static 미들웨어 추가
app.use(express.static(__dirname + '/public'))
//핸들바 뷰 엔진 설정
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
//홈페이지 레이아웃 
app.get('/',(req,res)=> res.render('home'))
//로그인 레이아웃 
app.get('/login',(req,res)=>res.render('login'))
//회원가입 레이아웃
app.get('/signup',(req,res)=>res.render('signup'))

app.listen(port, () =>console.log(
  `Express started on http://localhost:${port};` +
  `press 컨트롤C ㅎㅎ`))

