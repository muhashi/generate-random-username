import adjectives from './adjectives.js';
import animals from './animals.js';

// Max retries for generating username if usernames are above maximum length
const MAX_RETRIES = 1000;

function getRandomFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomDigits(digits) {
    const randomNumber = Math.floor(
        Math.random() * Math.pow(10, digits)
    );

    return randomNumber.toString().padStart(digits, '0');
}

function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function generateRandomUsername({ separator = '-', digits = 0, maxLength = null, capitalize = false } = {}) {
    if (typeof separator !== 'string') {
        separator = '';
    }

    if (typeof digits !== 'number') {
        digits = 0;
    }

    if (typeof maxLength !== 'number') {
        maxLength = null;
    }

    if (maxLength !== null) {
        for (let i = 0; i < MAX_RETRIES; i++) {
            const username = generateUsername({ separator, digits, capitalize });
            if (username.length <= maxLength) return username;
        }
    }

    return generateUsername({ separator, digits, capitalize });
}

function generateUsername({ separator = '-', digits = 0, capitalize = false } = {}) {
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
