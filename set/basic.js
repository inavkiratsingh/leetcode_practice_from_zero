let data = new Set(['anil', 'peter0', 'anil'])
console.log(data);
data.add('bruce');
console.log(data);
console.log(data.has('peter0'));
console.log(data.size);
data.delete('anil')
console.log(data.entries());
console.log(data.values());
