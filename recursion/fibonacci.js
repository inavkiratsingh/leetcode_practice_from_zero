function fibo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    n1 = 0
    n2 = 1

    for(let i = 2; i <= n; i++) {
        let n3 = n1+n2;
        n1 = n2;
        n2 = n3;
    }
    
    console.log(n2);
    
    return n2;
    
}

var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    n1 = 0
    n2 = 1

    for(let i = 2; i <= n; i++) {
        let n3 = n1+n2;
        n1 = n2;
        n2 = n3;
    }
    
    console.log(n2);
    
    return n2;
};

fibo(5)