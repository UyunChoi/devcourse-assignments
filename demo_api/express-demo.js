import express from 'express'

const app = express()

// GET + "/"
app.get('/', (req, res) => {
  res.send('Hello World')
})

let newBook = {
    title : "Node.js를 공부해보자",
    price :2000,
    description : "이 책 좋음 왜? 김송아가 지음"
}

app.get('/products/1', (req, res) => {
  res.send(newBook)
})

app.listen(1234);

