// express 모듈 셋팅 // express 모듈 꺼내기
const express = require('express');
const app = express();
app.listen(1234);

// 데이터 셋팅 // 맵을 만들어서 youtuber 객체를 3개 추가
const youtuber1 = {
    channelTitle : "채널십오야",
    sub : "713만명",
    videoNum : "1.9천개"
};

const youtuber2 = {
    channelTitle : "침착맨",
    sub : "295만명",
    videoNum : "7천개"
};

const youtuber3 = {
    channelTitle : "TEO 테오",
    sub : "140만명",
    videoNum : "1.9천개"
};

let db = new Map();

/* 작동 예시
// "@15ya_egg" "@ChimChakMan_Official" "@TEO_universe"

@15ya_egg
{"channelTitle":"채널십오야","sub":"713만명","videoNum":"1.9천개","id":"@15ya_egg"}

@ChimChakMan_Official
{"channelTitle":"침착맨","sub":"295만명","videoNum":"7천개","id":"@ChimChakMan_Official"}

@TEO_universe
{"channelTitle":"TEO 테오","sub":"140만명","videoNum":"1.9천개","id":"@TEO_universe"}

7
{"id":"7","message":"찾으시는 유튜버가 없습니다."}
*/

/* // REST API 설계 // 개별조회 // 혼자
// 데이터 셋팅
db.set("@15ya_egg", youtuber1);
db.set("@ChimChakMan_Official", youtuber2);
db.set("@TEO_universe", youtuber3);

app.get('/:strPath', (req, res) => {
    const {strPath} = req.params;
    const strDbKey = strPath;
    const mapDbValues = db.get(strDbKey); 

    //console.log(`test : strPath : ${strDbKey}`);
    //console.log(`test : db.get(intDbKey) : ${mapDbValues}`);
    if(mapDbValues == undefined){
        res.json({
            id : strDbKey,
            message : "찾으시는 유튜버가 없습니다."
        });
    }else{    
        mapDbValues.id = strDbKey; // undefind.id 불가
        res.json(mapDbValues);
    }
});
*/

/* REST API 설계 // 개별조회 // 강의 내용 : `/youtuber/:strPath` */
// 데이터 셋팅

/* 데이터 임의 셋팅
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);
 */

/* 미리 혼자 작성해보기 //auto increment 구현 
db.set(db.size + 1, youtuber1);
db.set(db.size + 1, youtuber2);
db.set(db.size + 1, youtuber3);
*/

/* 강의 내용 //auto increment 구현 */
var id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

/* // 전체 조회 //혼자 
app.get('/youtubers', (req, res) => {
    /* 
    console.log(db.values());
    res.json(db.values());
    /

    for (const element of db.values()) {
        console.log(element);
        res.json(element);
    }

});
*/

/* Examples : Map.prototype.forEach() 
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// Logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
*/

// 전체 조회 // 강의내용
app.get('/youtubers', (req, res) => {

    /* (개념) forEach 
    db.forEach((value, key) => {
        youtubers[key] = value;
    });
    */

    /* (비교) map 객체
    console.log(db);
    console.log(`db : ${db}`);
    console.log(`typeof db : ${typeof db}`);
    console.log(`db.entries : ${[...db.entries()]}`);

    res.json(db);
    */

    /* (비교) 객체
    let jsonObject = {};

    db.forEach((youtubers, id) => {
        jsonObject[id] = youtubers;
    });

    console.log(jsonObject);
    console.log(`jsonObject : ${jsonObject}`);
    console.log(`typeof jsonObject : ${typeof jsonObject}`);
    // (TypeError) console.log(`jsonObject.entries : ${[...jsonObject.entries()]}`);

    res.json(jsonObject);
    //res.json(JSON.stringify(jsonObject));
    */

    /* (비교) 객체의 이름과 매개변수의 이름이 같다면? // console : {}
    let youtubers = {};
    db.forEach((youtubers, id) => {
        youtubers[id] = youtubers;
    });
    console.log(youtubers);
    res.json(youtubers); 
    */

    /* 강의 내용 */
    let youtubers = {};

    db.forEach((youtuber, id) => {
        youtubers[id] = youtuber;
    });

    res.json(youtubers);
    

    /* 보내줄 데이터 선택 
    let youtubers = {};

    db.forEach((youtuber) => {
        youtubers[youtuber.channelTitle] = youtuber;
    });
    
    res.json(youtubers);
    */

});

// 개별 조회
app.get('/youtubers/:strPath', (req, res) => {
    const {strPath} = req.params;
    const intDbKey = parseInt(strPath);
    const mapDbValues = db.get(intDbKey); 

    console.log(`test : parseInt(strPath) : ${intDbKey}`);
    console.log(`test : db.get(intDbKey) : ${mapDbValues}`);
    if(mapDbValues == undefined){
        res.json({
            id : intDbKey,
            message : "찾으시는 유튜버가 없습니다."
        });
    }else{    
        mapDbValues.id = intDbKey; // undefind.id 불가
        res.json(mapDbValues);
    }

    // test : console : db
    //console.log(`db : ${db}`);
});


/* 미리 혼자 작성해보기 // 유튜버 등록 // post 활용
app.use(express.json());

app.post('/registration', (req,res) => {
    /* 나중에 생각해보기 // 폼을 먼저 뿌져주고, 받고, 다시 뿌릴 순 없는지
    const form = {
        id : '',
        channelTitle : "등록하려는 채널명으로 수정하세요.",
        sub : "등록하려는 채널의 구독자 수로 수정하세요",
        videoNum : "등록하려는 채널의 영상 갯수로 수정하세요"
    };
    /
    
    // 나중에 생각해보기 // 무슨 문제가 발생하고 어떻게 수정해야하는지 
    //let reg = res.json(req.body);
    res.json(req.body);

    // 나중에 생각해보기 
    // id 중복 검사 후, 중복된 아이디가 없다면
    // db에 insert하기 올바른 형태인지 확인 및 파싱
    db.set(req.body.id, req.body);

    //test : console : 
    console.log(req.body);
    //console.log(reg);
    console.log(db);
});
*/

/* // 강의 내용 + 내맘대로 변경
app.use(express.json()); // http 외 모듈인 '미들웨어':json 설정
app.post('/youtubers', (req, res) => {
    console.log(req.body);

    db.set(req.body.id, req.body);

    res.json({
        message : `${db.get(req.body.id).channelTitle}님, 요청하신 기존 채널의 등록 처리가 완료 되었습니다.`
    });
    // ${db.get(req.body.id).channelTitle}
    // ${req.body.channelTitle}
});
 */

// 유튜버 등록 // 강의 내용
app.use(express.json()); // http 외 모듈인 '미들웨어':json 설정
app.post('/youtubers', (req, res) => {
    console.log(req.body);

    // db.set(id++, req.body); // 강의 내용 // 등록된 순서대로 id가 1씩 늘어남
    db.set(id, req.body); // 내 경우 // 내가 id를 브라우저에서 입력하도록 했고 id를 7로 설정함.

    res.json({
        message : `${db.get(id).channelTitle}님, 요청하신 기존 채널의 등록 처리가 완료 되었습니다.`
    });
});

/* 미리 혼자 작성하기 // 개별 삭제 // delete 활용 
app.delete('/youtubers/:strPath', (req, res) => {
    const{strPath} = req.params;
    const intId = parseInt(strPath);
    let objDelete = db.get(intId);
    
    console.log(`strPath : ${strPath}`);
    console.log(`intId : ${intId}`);
    console.log(objDelete);
    if(objDelete != undefined){
        db.delete(objDelete.id);
        objDelete = {
            id : intId,
            message : `${objDelete.channelTitle}님, 요청하신 등록 해제 처리가 완료되었습니다.`
        };
    }else{
        objDelete = {
            id : intId,
            message : `입력하신 ${intId}와 일치하는 채널을 찾을 수 없습니다.`
        };
    }
    res.json(objDelete);
});
*/

/* 강의내용 // 개별 삭제  */
app.delete('/youtubers/:strPath', (req, res) => {
    const {strPath} = req.params;
    const intPath = parseInt(strPath);

    const youtuber = db.get(intPath);
    if(youtuber == undefined){
        res.json({
	        message : `입력하신 ${strPath}(과/와) 일치하는 채널을 찾을 수 없습니다.`
        });
    }else{
        const channelTitle = youtuber.channelTitle;
        db.delete(intPath);
    
        res.json({
	        message : `${channelTitle}님, 요청하신 등록 해제 처리가 완료되었습니다.`
        });
    }
});

/* 미리 혼자 작성하기 // 전체 삭제 
app.delete('/youtubers', (req, res) => {
    // 안에 요소를 모두 삭제해도 되고, 빈 map으로 덮어써도 되고?
    
    /* 삭제(1) - forEach 
    db.forEach(( _, id) => {
        db.delete(id);
    });
    /

    /* 삭제(2-1) - for of 
    for(const id of db.keys()){
        db.delete(id);
    }
    /

    /* 삭제(2-2) - for of + 구조 분해 할당
    for(const [id, _] of db){
        db.delete(id);
    }
    /

    /* 삭제(X) - for...in // db가 map이므로 불가 
    for(const id in db){
        db.delete(id);
    }
    /

    /* 삭제(3) - clear()/
    db.clear();
    

    console.log(db);
    if(db.size == 0){
        res.json({
            message : "전체 유튜버가 삭제 되었습니다."
        });
    }else{
        res.json({
            message : "문제가 발생하여 삭제하지 못했습니다."
        });
    }
});
*/

/* 강의내용 // 전체 삭제  */
app.delete('/youtubers', (req, res) => {
    let msg = "";

    // db에 값이 1개 이상이면, 전체 삭제
    if (db.size > 0){
        db.clear();
        msg = "전체 유튜버가 삭제되었습니다.";

    } else { // 값이 없으면, "삭제할 유튜버가 없습니다."
        msg = "삭제할 유튜버가 없습니다.";
    }

    res.json({
        message : msg
    });

});

/* 미리 혼자 작성하기 // 개별 수정 
app.put('/youtubers/:strPath',(req, res) => {
    const {strPath} = req.params;
    const intPath = parseInt(strPath);
    const before = {...db.get(intPath)};
    const {channelTitle} = req.body;
    let msg = "";
    let after = {...before};

    after.channelTitle = channelTitle;
    db.set(intPath,after);
    after = db.get(intPath);

    function message(){
        if(channelTitle == before.channelTitle){
            console.log(channelTitle);
            console.log(before.channelTitle);
            return `변경할 내용이 없습니다.`;
        }
        if(channelTitle == after.channelTitle){
            console.log(channelTitle);
            console.log(after.channelTitle);
            return `${before.channelTitle}님, 요청하신 ${after.channelTitle}(으)로 변경 되었습니다.`;
        }
        return `변경 중 오류가 발생하여 실패하였습니다.`;
    }

    msg = message();

    res.json({
        message : msg
    });
});
*/

/* 강의내용 // 개별 수정 */
app.put('/youtubers/:strPath', (req, res) => {
    const {strPath} = req.params;
    const intPath = parseInt(strPath);

    const youtuber = db.get(intPath);
    const oldTitle = youtuber.channelTitle;
    if(youtuber == undefined){
        res.json({
	        message : `입력하신 ${strPath}(과/와) 일치하는 채널을 찾을 수 없습니다.`
        });
    }else{
        // 수정 처리
        const channelTitle = req.body.channelTitle;   // youtuber 개별 등록 참고
        console.log(channelTitle);

        youtuber.channelTitle = channelTitle;
        db.set(intPath, youtuber);

        res.json({
            message : `${oldTitle}님, 채널명이 ${channelTitle}로 수정되었습니다.`
        });
    }
});