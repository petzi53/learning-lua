
/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */

// at least one actor must be awake to get some information
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return prisonerIsAwake && !archerIsAwake;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
) {
    return (petDogIsPresent && !archerIsAwake) ||
        (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake)
}


let knightIsAwake = true;
console.log("Fast Attack:", canExecuteFastAttack(knightIsAwake));      // => false

let archerIsAwake = true;
knightIsAwake = false;
let prisonerIsAwake = false;
console.log("Spy:", canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)); // => true

archerIsAwake = false;
prisonerIsAwake = true;
console.log("Signal Prisoner:", canSignalPrisoner(archerIsAwake, prisonerIsAwake));     // => true

knightIsAwake = false;
archerIsAwake = true;
prisonerIsAwake = false;
let petDogIsPresent = false;
console.log("Free Prisoner:", canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
// => false