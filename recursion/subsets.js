const solve = (ip, op, result) => {
    if(ip.length == 0) {
        result.push(op)
        return;
    }

    let op1 = op;
    let op2 = op + ip[0];
    
    ip = ip.slice(1);

    solve(ip, op1, result);
    solve(ip, op2, result);
}

let result = []
solve("abc", "", result);
console.log("Subsets of ab is ",result);
