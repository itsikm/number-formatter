'use strict';

/**
 * Adss commas to a number
 * @param {number} number
 * @return {string}
 */
module.exports = function (number, local) {
    return number.toLocaleString(local);
};