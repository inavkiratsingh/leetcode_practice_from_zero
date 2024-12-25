var isHappy = function(n) {
    let seen = new Set();
    let sum;
    while (n !== 1 || !seen.has(n)){
        seen.add(n);
        sum = 0;
        while(n > 0) {
            let num = n % 10;
            sum += num * num;
            n = Math.floor(n/10)
        }
        n = sum;
    }
    
    return n === 1;
    

};

n = 7
console.log(isHappy(n));
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1