import express from 'express'

const app = express()

let newBook = {
    title : "Node.js를 공부해보자",
    price :2000,
    description : "이 책 좋음 왜? 김송아가 지음"
}

// GET /hello, /bye, /nicetomeetyou
app.get('/hello', function(req, res){
  // res.send(`안녕하세요.`);

  /* 
    res.send({
      say : '안녕하세요'
  });
  */
  
  /* 
    res.json({
      say : '안녕하세요'
    });
  */
  
    res.json(newBook);
});

app.get('/bye', (req, res) => {
  res.send(`안녕히 가세요.`);
});

app.get('/nicetomeetyou', (req, res) => {
  res.send(`만나서 반갑습니다.`);
});

app.listen(1234);
