var spaces = (result, ip, op) => {
    if(ip.length == 0) {
        result.push(op);
        return;
    }

    let op1 = op + '-' + ip[0];
    let op2 = op + ip[0];
    console.log(op1,op2);
    
    ip = ip.slice(1);
    spaces(result, ip, op1);
    spaces(result, ip, op2);
    return;

}

let result = [];
spaces(result, "bc", "a");
console.log(result);
