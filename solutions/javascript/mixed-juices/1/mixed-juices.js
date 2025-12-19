/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    let timeToMix;
    switch (name) {
        case 'Pure Strawberry Joy':
            timeToMix = 0.5;
            break;
        case 'Energizer':
        case 'Green Garden':
            timeToMix = 1.5;
            break;
        case 'Tropical Island':
            timeToMix = 3.0
            break;
        case 'All or Nothing':
            timeToMix = 5.0
            break;
        default:
            timeToMix = 2.5
            break;
    }
    return timeToMix;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    // handle two special conditions:
    // a) no weedgesNeeded
    // b) no limes available
    let i = 0;
    if (wedgesNeeded === 0 || limes.length === 0) return i;
    let numLimes = 0;
    while (numLimes < wedgesNeeded && i < limes.length) {
        switch (limes[i]) {
            case "small":
                numLimes += 6;
                break;
            case "medium":
                numLimes += 8;
                break;
            case "large":
                numLimes += 10;
                break;
        }
        i++;
    }
    return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let timeToMix = 0;
    let i = 0;
    do {
        timeToMix += timeToMixJuice(orders[i++]);
        // if no remaining orders left, return empty array
        if (orders[i] === undefined) return [];
    } while (timeToMix < timeLeft);
    return orders.slice(i);
}


// console.log(timeToMixJuice('Tropical Island'));  // => 3
// console.log(timeToMixJuice('Berries & Lime'));   // => 2.5
// console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])); // => 4
// console.log(limesToCut(42, ["small", "large", "large", "medium", "small", "large", "large", "medium"])) // => 6
// console.log(limesToCut(10, [])); // => 0
// console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));  // => ['Green Garden']
// console.log(remainingOrders(12, 
//    ["Energizer", "Green Garden", "Ruby Glow", "Pure Strawberry Joy", "Tropical Island", "Limetime"])); // => []
