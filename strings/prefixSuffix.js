var isPrefixAndSuffix = function(word1, word2) {
    if(word1.length > word2.length) {
        return false;
    }
    let word1Len = word1.length;

    let prefix = word2.substring(0, word1Len);
    let suffix = word2.substring(word2.length - word1Len, word2.length);

    if(prefix === word1 && suffix === word1) {
        return true;
    }
    return false;
    
}

var countPrefixSuffixPairs = function(words) {
    let map = {};
    let count = 0;
    for(let i = 0; i < words.length; i++) {
        for(let j = i+1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])){
                count++;
            }
        }
    }
    console.log(count);
    
};

let words = ["a","aba","ababa","aa"];
const prefixes = new Set();
const suffixes = new Set();
for (let word of words) {
    prefixes.add(word);
    suffixes.add([...word].reverse().join('')); // Store reversed words
}
console.log(prefixes, suffixes);

countPrefixSuffixPairs(words);