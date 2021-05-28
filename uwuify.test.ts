import uwuify from './uwuify';

describe('uwuify deterministic', () => {
    for (const test of [
        {
            desc: 'replaces you with uwu',
            input: 'would you like a drink?',
            output: 'wouwd uwu wike a dwink?'
        },
        {
            desc: 'replaces r with w',
            input: 'thiws hurts my brain!',
            output: 'this huwts my bwain!'
        },
        {
            desc: 'replaces ttle with ddel',
            input: 'thiws is a little weird',
            output: 'this is a widdle weiwd'
        },
        {
            desc: 'double ll to w',
            input: 'hello there!',
            output: 'hewo thewe!'
        },
        {
            desc: 'th to ff',
            input: 'im with this band',
            output: 'im wiff this band'
        },

    ]) {
        it(test.desc, () => {
            expect(uwuify(test.input).res.toLowerCase()).toEqual(test.output);
        })
    }
});
