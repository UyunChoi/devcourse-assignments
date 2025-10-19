// db 생성
// express 모듈 가져와서 req 받고 res 돌려주기
const express = require('express');

const app = express();
app.listen(1234);

// map 객체를 데이터베이스 대신 사용
let db = new Map();

let notebook = {
    productName : "Notebook",
    price : 2000000,
    description : "description1"
}

let cup = {
    productName : "Cup",
    price : 3000,
    description : "description2"
}

let chair = {
    productName : "Chair",
    price : 100000,
    description : "description3"
}

let poster = {
    productName : "Poster",
    price : 20000,
    description : "description4"
}

db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster); 

/* Map (String) : 데이터 set
db.set(1, "NoteBook"); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, "Cup");
db.set(3, "Chair");
db.set(4, "Poster"); 
*/

/* test : console : db.get()
console.log(db);
console.log("NoteBook");

console.log(db.get(1));
console.log(db.get("1"));
console.log(db.get(2));
console.log(db.get(3));
*/

/* test : console : Key값으로 Value값을 출력
console.log(notebook);
//console.log(notebook.get("productName"));
//console.log(notebook[productName]);
console.log(notebook["productName"]);
console.log(notebook.productName);
 */

/* 출력값 예시
localhost:1234/1 => NoteBook
localhost:1234/2 => Cup
localhost:1234/3 => Chair
*/ 

/* Map (String) app.get() 초안
app.get('/:strPath', (req, res) => {
    const {strPath} = req.params;

    if(db.get(parseInt(strPath)) == undefined){
        res.json({
            id : parseInt(strPath),
            message : "입력하신 값에 대한 정보가 없습니다."
        });
    }else{
        res.json({
            id : parseInt(strPath),
            productName : db.get(parseInt(strPath))
        });
        //console.log(`strPrdName : ${strProdName}`)
    }
});
*/

/* Map (String) : app.get() 최종
app.get('/:strPath', (req, res) => {
    const {strPath} = req.params;

    /* test : console : db.get(strPath);
     * console.log(`req : ${strPath} / res : ${db.get(strPath)}`);
     * req : 1 / res : undefined
     * 
     * console.log(`req : ${strPath} / res : ${db.get(1)}`);
     * req : 1 / res : NoteBook
     * 
     * console.log(`req : ${strPath} / res : ${db.get(parseInt(strPath))}`);
     * req : 1 / res : NoteBook
     * 
     * res.json(
     *     db.get(parseInt(strPath))
     * );
     * NoteBook
     /
     
    //조건문에 함수가 들어가면 성능이 저하됨으로? -> 이게 과연 옳은 개선 방법일까?
    const intKey = parseInt(strPath);
    const strProdName = db.get(intKey);

    console.log(`strPrdName : ${strProdName}`);

    if(strProdName == undefined){
        res.json({
            id : intKey,
            message : "입력하신 값에 대한 정보가 없습니다."
        });
    }else{
        res.json({
            id : intKey,
            productName : strProdName
        });
    }
}); 
*/

/* Map (Object) app.get() 초안
app.get('/:strPath', (req,res) => {
    const {strPath} = req.params;

    const intPath = parseInt(strPath);
    const mapDbValues = db.get(intPath);

    console.log(`test : db.get(intPath) : ${mapDbValues}`);
    if(mapDbValues == undefined){
        res.json({
            id : intPath,
            message : "일치하는 상품이 없습니다."
        });
    }else{
        const strProductName = mapDbValues.productName;
        const intPrice = mapDbValues.price;
        const strDescription = mapDbValues.description;

        res.json({
            id : intPath,
            productName : strProductName,
            price : intPrice,
            description : strDescription
        });
    }
});
 */

/* Map (Object) app.get() 혼자
app.get('/:strPath', (req,res) => {
    const {strPath} = req.params;

    const intPath = parseInt(strPath);
    const mapDbValues = db.get(intPath);

    if(mapDbValues !== undefined){
        const strProductName = mapDbValues.productName;
        const intPrice = mapDbValues.price;
        const strDescription = mapDbValues.description;

        res.json({
            id : intPath,
            productName : strProductName,
            price : intPrice,
            description : strDescription
        });

    }else{
        res.json({
            id : intPath,
            message : "일치하는 상품이 없습니다."
        });
    }
});
 */

/* Map (Objest) app.get() 최종 : JS 객체 데이터 추가 */
app.get('/:strPath', (req,res) => {
    const {strPath} = req.params;

    const intPath = parseInt(strPath);
    const mapProduct = db.get(intPath);

    if(mapProduct == undefined){
        res.json({
            id : intPath,
            message : "일치하는 상품이 없습니다."
        });
    }else{
        mapProduct.id = intPath;
        /* 혼동X
        mapProduct.id = mapProduct.inPath;
        mapProduct.productName = mapProduct.strProductName;
        mapProduct.price = mapProduct.intPrice;
        mapProduct.description = mapProduct.strDescription;
         */

        res.json(mapProduct);
    }

});