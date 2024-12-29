function factorial(k) {
    let result = 1;
    if(k < 0) {
        return "error"
    }
    for( let i = 1; i <= k; i++) {
        result *= i;
    }
    
    return result
}

var trailingZeroes = function(n) {
    let count = 0;
    while(n>=5) {
        n = Math.floor(n/5);
        count += n;
        
    }
    return count;
};


trailingZeroes(10)