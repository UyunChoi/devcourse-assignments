import express from 'express'

const app = express()

// API : GET + "http://localhost:1234/test"
// TEST SUCCESS
app.get('/test', (req, res) =>{
  res.send(`TEST SUCCESS`);
});

// API : GET + "http://localhost:1234/test/1"
// "One"
app.get('/test/1', function(req, res){
  res.send(`One`);
});

app.listen(1234);