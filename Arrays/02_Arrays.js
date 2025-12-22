const marvel_heros = ["thor","spiderman","ironman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//1.Concat method
// const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes);

//2.Spread method
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

//3.Flat method
const newAnotherArray = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13,[14,15,16]]]];
const flatNewArray   = newAnotherArray.flat(Infinity);
console.log(flatNewArray)

console.log(Array.isArray("Darshan"));
console.log(Array.from("Darshan"));//Convert into Array
console.log(Array.from({name: "Darshan"}));//Intresting part

let score1 = 100 
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));





