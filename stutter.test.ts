import stutter from './stutter';

describe('stutter', () => {
    for (const test of [
        {
            desc: 'two letter single stutter',
            input: { val: 'hi', count: 1 },
            output: 'h-hi'
        },
        {
            desc: 'three letter double stutter',
            input: { val: 'you', count: 2 },
            output: 'y-y-you'
        },
        {
            desc: 'double letter consonant single stutter',
            input: { val: 'this', count: 1 },
            output: 'th-this'
        },
        {
            desc: 'triple consontant triple stutter',
            input: { val: 'throw', count: 3 },
            output: 'thr-thr-thr-throw'
        },
        {
            desc: 'leading vowel single stutter',
            input: { val: 'uh', count: 1 },
            output: 'u-uh'
        },
    ]) {
        it(test.desc, () => expect(stutter(test.input.val, test.input.count)).toEqual(test.output));
    }
});
