//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
    let str = '';
    if (num % 3 === 0) str += "Pling";
    if (num % 5 === 0) str += "Plang";
    if (num % 7 === 0) str += "Plong";
    if (str === '') str += num;
    return str;


};

console.log(convert(28)); // "Plong"
console.log(convert(30)); // "PlingPlang"
console.log(convert(34)); // "34"