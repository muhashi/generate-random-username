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
