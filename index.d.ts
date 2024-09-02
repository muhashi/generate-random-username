export type Options = {
    /**
    Separator to use between words in the username.

    @default A dash '-'
    */
    readonly separator?: string;

    /**
    Number of random digits to append to end of username.

    @default 0
    */
    readonly digits?: number;

    /**
    The maximum length of a username to generate.
    For lengths under 10, it may not always find a username under that length, and will fallback to returning a longer username.

    @default null
    */
    readonly maxLength?: number;

    /**
    Whether to capitalize each word used in the username.

    @default false
    */
    readonly capitalize?: boolean;
};

/**
Generate a random username from a list of adjectives and animals.

Options exist for a custom separator between the username, limiting username to a maximum length, adding random digits, and capitalizing the words in the username.
@param options - options to customize the username
@returns a randomly generated username

@example
```
import generateRandomUsername from 'generate-random-username';

generateRandomUsername();
//=> 'humble-shrew'

generateRandomUsername({ capitalize: true });
//=> 'Witty-Camel'

generateRandomUsername({ separator: '_' });
//=> 'safe_llama'

generateRandomUsername({ maxLength: 10 });
//=> 'clear-eel'

generateRandomUsername({ digits: 3 });
//=> 'unaffected-cat-184'
```
*/
export default function generateRandomUsername(options?: Options): string;
