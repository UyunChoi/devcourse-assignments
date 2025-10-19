let factorial = (i) => {
    if(i<=0){
     return 1;   
    }
    return i * factorial(i-1);
}

let solution = (n,i=1) => {
    if(factorial(i+1) > n){
        return i;
    }
    return solution(n,i+1);
}

console.log(`${solution(3628800)}`);