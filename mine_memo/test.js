/*
function factorial(num){
    let result = 1;
    for(let f=1; f<(num+1); f++){
        result *= f;
    }
    //console.log(`result : ${result}`);
    return result;
    
}
*/

/*
function solution(n){
    let result=0;
    for(let i=1; factorial(i)<n+1; i++){
        result = i
    }
    return result;
    
}
*/


let factorial = (i) => {
    if(i<=0){
        return 1;
    }
    return i * factorial(i-1);
}

let solution = (n, i=1) => {
    // factorial(i) < n+1 // i 최댓값 리턴
    if(factorial(i+1) > n){
        return i;
    }
    return solution(n, i+1);
}

console.log(`${solution(3628800)}`);


// 재계산 방지

let solution4 = (n) => {
    let answer = 0 ;
    let maxFact = 1 ;
    
    for(let i = 1; maxFact <= n; i++){
        maxFact *= i;
        
        if(maxFact <= n){
            answer = i;
        }
    }
    return answer;
}


function a(){
    let b = 0;
    let c = 1;

}

