import transferCapitalization from './capitalization';

describe('capitalization', () => {
    for (const test of [
        {
            desc: 'one to one',
            original: 'Hello there!',
            uwu: 'hewwo there!',
            output: 'Hewwo there!'
        }
    ]) {
        it(test.desc, () => expect(transferCapitalization(test.original, test.uwu)).toEqual(test.output))
    }
}); 