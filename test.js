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

test('generates a username with a maximum length', t => {
    const maxLength = 10;
    const username = generateRandomUsername({ maxLength });
    t.true(username.length <= maxLength);
});

test('generates a username with random digits added', t => {
    const digits = 3;
    const username = generateRandomUsername({ digits });
    t.regex(username, /^[a-z]+-[a-z]+-\d{3}$/);
});

test('ensures username length respects maxLength even with digits', t => {
    const maxLength = 15;
    const digits = 4;
    const username = generateRandomUsername({ maxLength, digits });
    t.true(username.length <= maxLength);
    t.regex(username, new RegExp(`^([a-z]+-[a-z]+-\\d{${digits}})$`));
});

test.only('ensures username respects maxLength even with separator', t => {
    const maxLength = 10;
    const separator = '_';

    // Try a lot of times to make sure doesn't go over 10 characters
    for (let i = 0; i < 1000000; i++) {
        const username = generateRandomUsername({ maxLength, separator });
        t.true(username.length <= maxLength);
    }
});

test('ensures capitalized username respects maxLength', t => {
    const maxLength = 12;
    const username = generateRandomUsername({ maxLength, capitalize: true });
    t.true(username.length <= maxLength);
});

test('ensures username respects maxLength with custom separator and digits', t => {
    const maxLength = 20;
    const separator = '*';
    const digits = 5;
    const username = generateRandomUsername({ maxLength, separator, digits });
    t.true(username.length <= maxLength);
    t.regex(username, new RegExp(`^[a-z]+\\*[a-z]+\\*\\d{${digits}}$`));
});
