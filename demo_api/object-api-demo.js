const express = require('express');

const app = express();
app.listen(1234);

// 채널 주소 : https://www.youtube.com/@ChimChakMan_Official
// 채널 주소 : https://www.youtube.com/@15ya_egg
// 채널 주소 : https://www.youtube.com/@TEO_universe
let youtuber1 = {
    channelTitle : "채널십오야",
    sub : "713만명",
    videoNum : "1.9천개"
}

let youtuber2 = {
    channelTitle : "침착맨",
    sub : "295만명",
    videoNum : "7천개"
}

let youtuber3 = {
    channelTitle : "TEO 테오",
    sub : "140만명",
    videoNum : "1.9천개"
}

let nicknameArr = ['@15ya_egg', '@ChimChakMan_Official','@TEO_universe'];
let youtuberArr = [youtuber1, youtuber2, youtuber3];

app.get('/:nickname',(req,res) => {
    
    const {nickname} = req.params;
    
    // '@15ya_egg' '@ChimChakMan_Official' '@TEO_universe' 
    
    //console.log(nickname);

    //console.log(youtuberArr[nicknameArr.indexOf(nickname)]);
    
    // 이제 어떻게 json으로 보낸담? -> 방금 배운 핵심인데 모르겠네;;
    const output = youtuberArr[nicknameArr.indexOf(nickname)];

    res.json({
        channelTitle : output.channelTitle,
        sub : output.sub,
        videoNum : output.videoNum
    });

    // res.json({
    // 채널명 : channelTitle,
    // 구독자수 : sub,
    // 비디오수 : videoNum
    // });
    
});

// YouTube 타임스탬프를 포함하는 주소는 링크 생성 방법에 따라 주소 형식이 조금씩 다를 수 있습니다.
// (예시)
// https://www.youtube.com/watch?v=WUzrj2xX7Zw
// Share 버튼 : https://youtu.be/WUzrj2xX7Zw?si=lhAVO-faCROQDKWZ
// 현재 시간에 동영상 URL 복사 : https://www.youtube.com/watch?v=WUzrj2xX7Zw&t=1595s
// 수동 URL 추가 : https://www.youtube.com/watch?v=WUzrj2xX7Zw?&t=26m35s7