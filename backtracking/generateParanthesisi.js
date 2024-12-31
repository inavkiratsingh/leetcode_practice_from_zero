var generateParenthesis = function(n) {
    let stack = [];
    let result = [];

    function backtracking(open, close) {
        if(open === n && close === n) {
            result.push(stack.join(''));
            return;
        }

        if(open < n){
            stack.push('(')
            backtracking(open+1, close);
            stack.pop()
        }

        if(close < open) {
            stack.push(')')
            backtracking(open, close+1);
            stack.pop()
        }
    }

    backtracking(0,0)

    console.log(result);

    
    
};

generateParenthesis(3)
