
/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    if (kind === 'car' || kind === 'truck') return true;
    return false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    const msg = " is clearly the better choice.";
    if (option1 > option2) {
        return option2 + msg;
    } else {
        return option1 + msg;
    }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        return originalPrice * 0.8;
    } else if (age >= 3 && age <= 10) {
        return originalPrice * 0.7;
    } else {
        return originalPrice * 0.5;
    }
}


console.log(needsLicense('car'));  // => true
console.log(needsLicense('bike')); // => false
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
// =>  'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));
// =>  'Volkswagen Beetle is clearly the better choice.'
console.log(chooseVehicle('Bugatti Veyron', 'Ford Pinto'))
// =>  'Bugatti Veyron is clearly the better choice.
console.log(calculateResellPrice(1000, 1));  // => 800
console.log(calculateResellPrice(1000, 5));  // => 700
console.log(calculateResellPrice(1000, 15)); // => 500

