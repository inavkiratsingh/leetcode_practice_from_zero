var CaseChange = (result, ip, op) => {
    if(ip.length == 0) {
        result.push(op);
        return;
    }

    let op1 = op + ip[0].toUpperCase();
    let op2 = op + ip[0].toLowerCase();
    console.log(op1,op2);
    
    ip = ip.slice(1);

    CaseChange(result, ip, op2);
    CaseChange(result, ip, op1);
}