
/* Hello world 예제 설명
앱은 서버를 시작하며 3000번 포트에서 연결을 청취합니다. 
앱은 루트 URL(/) 또는 _라우트_에 대한 요청에 “Hello World!”로 응답합니다.
다른 모든 경로에 대해서는 404 Not Found로 응답합니다. // OUTPUT : Cannot GET (경로)
 */

const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//express의 generate 와 비교해보기
app.use(express.json());

app.post('/test', (req, res) => {
  // body에 숨겨져서 들어온 데이터를 화면에 출력해본다
  //console.log(req.body);
  //console.log(req.body["message"]);
  console.log(req.body.message);

  //res.send('test : POST');
    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
  //res.send(req.body.message);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

