import test from 'ava';
import generateRandomUsername from './index.js';


test('generates a username with default options', t => {
    const username = generateRandomUsername();
    t.regex(username, /^[a-z]+-[a-z]+$/);
});

test('generates a username with capitalized words', t => {
    const username = generateRandomUsername({ capitalize: true });
    t.regex(username, /^[A-Z][a-z]+-[A-Z][a-z]+$/);
});

test('generates a username with a custom separator', t => {
    const username = generateRandomUsername({ separator: ' ' });
    t.regex(username, /^[a-z]+ [a-z]+$/);
});

test('generates a username with random digits added', t => {
    const digits = 3;
    const username = generateRandomUsername({ digits });
    t.regex(username, /^[a-z]+-[a-z]+-\d{1,3}$/);
});

test('generates a username with all options combined', t => {
    const username = generateRandomUsername({ separator: '_', digits: 4, capitalize: true });
    t.regex(username, /^[A-Z][a-z]+_[A-Z][a-z]+_\d{1,4}$/);
});

test('throws an error for invalid digits input', t => {
    const error = t.throws(() => {
        generateRandomUsername({ digits: -1 });
    }, { instanceOf: Error });

    t.is(error.message, 'Number of digits must be between 0 and 15');
});

test('throws an error for too many digits', t => {
    const error = t.throws(() => {
        generateRandomUsername({ digits: 16 });
    }, { instanceOf: Error });

    t.is(error.message, 'Number of digits must be between 0 and 15');
});

test('handles non-string separator input gracefully', t => {
    const username = generateRandomUsername({ separator: 123 });
    t.regex(username, /^[a-z]+[a-z]+$/);
});

test('handles non-number digits input gracefully', t => {
    const username = generateRandomUsername({ digits: 'abc' });
    t.regex(username, /^[a-z]+-[a-z]+$/);
});

test('generates a username with zero digits', t => {
    const username = generateRandomUsername({ digits: 0 });
    t.regex(username, /^[a-z]+-[a-z]+$/);
});

test('generates a username with maximum digits', t => {
    const username = generateRandomUsername({ digits: 15 });
    t.regex(username, /^[a-z]+-[a-z]+-\d{1,15}$/);
});
