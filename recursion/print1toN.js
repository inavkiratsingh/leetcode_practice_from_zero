function print(n, arr) {
    if(n === 1) {
        arr.push(n)
        return
    }

    print (n-1, arr);
    
    arr.push(n)
    
}

let ans = []
print(7, ans);
console.log(ans);
