'use strict';

var adjectives = require('./adjectives.json');
var animals = require('./animals.json');

function getRandomFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomDigits(digits) {
    const randomNumber = Math.floor(
        Math.random() * Math.pow(10, digits)
    );

    return randomNumber;
}

function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateRandomUsername({ separator = '-', digits = 0, capitalize = false } = {}) {
    if (typeof separator !== 'string') {
        separator = '';
    }

    if (typeof digits !== 'number') {
        digits = 0;
    }

    if (digits < 0 || digits > 15) {
        throw new Error('Number of digits must be between 0 and 15');
    }

    let first = getRandomFromArray(adjectives);
    let second = getRandomFromArray(animals);

    if (capitalize) {
        first = capitalizeWord(first);
        second = capitalizeWord(second);
    }

    const randomDigits = digits > 0 ? separator + getRandomDigits(digits) : '';
    const username = `${first}${separator}${second}${randomDigits}`;

    return username;
}

module.exports = generateRandomUsername;
