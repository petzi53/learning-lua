//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (num) => {
    return (num % 400 === 0) || (num % 4 === 0 && !(num % 100 === 0));
};


console.log("2024:", isLeap(2024)); // true
console.log("1997:", isLeap(1997)); // false
console.log("1900:", isLeap(1900)); // false
console.log("2000:", isLeap(2000)); // true