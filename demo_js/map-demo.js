// map 함수 (메서드) vs foreach 차이
const arr = [1, 2, 3, 4, 5];

// 콜백 함수가 하는 일?
// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음 불리는 함수
let fe = arr.forEach((a, b, c) => {
    return a * 2;
});

console.log(fe);
console.log(arr);

console.log(`-----------------------------`);

let m = arr.map((a, b, c) => {
    return a * 2;
});

console.log(m);
console.log(arr);