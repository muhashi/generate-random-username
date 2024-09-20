# generate-random-username

> A tiny package to generate a random username from a list of adjectives and animals.

This package will generate close to 200k different unique usernames, even more with digits appended. The wordlist has been manually reviewed to ensure the words are appropriate for use in a username.

Options exist for a custom separator between the username, adding random digits, and capitalizing the words in the username.

## Install

```sh
npm install generate-random-username
```

## Usage

```js
import generateRandomUsername from 'generate-random-username';

generateRandomUsername();
//=> 'humble-shrew'

generateRandomUsername({ capitalize: true });
//=> 'Witty-Camel'

generateRandomUsername({ separator: '_' });
//=> 'safe_llama'

generateRandomUsername({ digits: 3, capitalize: true });
//=> 'Unaffected-Cat-184'
```

## API

### generateRandomUsername(options?)

#### options

Type: `object`

##### capitalize

Type: `boolean`\
Default: `false`

Whether to capitalize each word used in the username.

##### separator

Type: `string`\
Default: `'-'`

Separator to use between words in the username.

##### digits

Type: `number`\
Default: `0`

Number of random digits to append to end of username.
