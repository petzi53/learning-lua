/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let sum = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        sum += birdsPerDay[i];
    }
    return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    const WEEKDAYS = 7;
    let sum = 0;
    for (let i = WEEKDAYS * (week - 1); i < (WEEKDAYS * week); i++) {
        sum += birdsPerDay[i];
    }
    return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
        if (i === 0 || i % 2 === 0) {
            birdsPerDay[i] = birdsPerDay[i] + 1;
        }
    }
}

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount(birdsPerDay)); // => 34
console.log(birdsInWeek(birdsPerDay, 2)); // => 12
birdsPerDay = [2, 5, 0, 7, 4, 1];
console.log(fixBirdCountLog(birdsPerDay)); // => [3, 5, 1, 7, 5, 1]