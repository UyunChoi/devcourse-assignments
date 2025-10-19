/**
 * 배열
 */

const arr = [1, 2, 3, 4, 5];

// 미리
arr.forEach((v) => {
    console.log(v);
});

// 콜백 함수가 하는 일?
// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음 불리는 함수
arr.forEach(function(a, b, c) {
    console.log(`a : ${a}, b : ${b}, c : ${c}`);
});

// Map 과 foreach의 만남
let map = new Map(); 
map.set(7, "seven");
map.set(9, "nine");
map.set(8, "eight");

map.forEach((a, b, c) => {
    console.log(`a : ${a}, b : ${b}, c : ${c}`);
});