var wordSubsets = function(words1, words2) {
    // Step 1: Compute the maximum frequency of each character across all words in words2
    const getFrequency = (word) => {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    };

    const maxFreq = new Array(26).fill(0);
    for (const word of words2) {
        const freq = getFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    // Step 2: Check each word in words1
    const result = [];
    for (const word of words1) {
        const freq = getFrequency(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
};
