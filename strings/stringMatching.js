var stringMatching = function(words) {
    let set = []

    words.sort((a,b) => a.length - b.length);
    console.log(words);

    for(let i = 0; i < words.length; i++) {
        for(let j = i+1; j < words.length; j++) {
            if(i!==j && words[j].includes(words[i])) {
                set.push(words[i]);
                break;
            }
        }
    }
    
    return [...new Set(set)];
    
};

words = ["mass","as","hero","superhero"];
stringMatching(words);