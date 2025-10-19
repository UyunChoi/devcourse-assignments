//import express from 'express'

const express = require('express');
const app = express();
app.listen(1234);


// 채널 주소 : https://www.youtube.com/@15ya_egg
// 채널 주소 : https://www.youtube.com/@ChimChakMan_Official
// app.get('/:nickname', (req, res) => {
//   // 고도화
//   const params = req.params;

//   res.json({
//     channel : params.nickname
//   })

// })

// YouTube 타임스탬프를 포함하는 주소는 링크 생성 방법에 따라 주소 형식이 조금씩 다를 수 있습니다.
// (예시)
// https://www.youtube.com/watch?v=WUzrj2xX7Zw
// Share 버튼 : https://youtu.be/WUzrj2xX7Zw?si=lhAVO-faCROQDKWZ
// 현재 시간에 동영상 URL 복사 : https://www.youtube.com/watch?v=WUzrj2xX7Zw&t=1595s
// 수동 URL 추가 : https://www.youtube.com/watch?v=WUzrj2xX7Zw?&t=26m35s

app.get('/watch', (req, res) => {
  // const q = req.query; // q = {v:___, t:___}
  // console.log(q.v);
  // console.log(q.t);

  // 객체의 비구조화
  const {v, t} = req.query;
  console.log(v);
  console.log(t);

  res.json({
    video : v,
    timeline : t
  });
});
