import uwuify from './uwuify';

describe('uwuify', () => {
    for (const test of [
        {
            desc: 'replaces you with uwu',
            input: 'would you like a drink?',
            output: 'would uwu like a dwink?'
        },
        {
            desc: 'replaces r with w',
            input: 'my brain hurts!',
            output: 'my bwain hurts!'
        }
    ]) {
        it(test.desc, () => {
            expect(uwuify(test.input).res.toLowerCase()).toEqual(test.output);
        })
    }
});