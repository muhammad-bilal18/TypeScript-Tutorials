let tuple: [number, string] = [530, 'Bilal'];
console.log(tuple); // [ 530, 'Bilal' ]

// while definition compiler will strictly check type and size
// but we can use push() method to change the tuple

// let tuple2: [string, string] = ['abc', 1]; // type error
// let tuple3: [string, string] = ['abc', 'abc', 1]; // size error

tuple.push('ASE');
console.log(tuple); // [ 530, 'Bilal', 'ASE' ]

const enum Level { Easy = 0, Moderate, Hard};
let level: Level = Level.Hard;
console.log(level);


