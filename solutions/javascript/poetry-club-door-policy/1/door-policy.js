
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
    return line.slice(0, 1);
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
    const firstChar = word.slice(0, 1).toUpperCase();
    const restWord = word.slice(1).toLowerCase();
    return firstChar + restWord;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    return line.trim().slice(-1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
    const firstChar = word.slice(0, 1).toUpperCase();
    const restWord = word.slice(1).toLowerCase();
    return firstChar + restWord + ", please";
}

console.log(frontDoorResponse('Stands so high'));     // => "S")
console.log(frontDoorPassword('SHIRE'));              // => "Shire"
console.log(frontDoorPassword('shire'));              // => "Shire"
console.log(backDoorResponse('Stands so high'));      // => "h"
console.log(backDoorResponse('Stands so high   '));   // => "h"
console.log(backDoorPassword('horse'));               // => "Horse, please"
