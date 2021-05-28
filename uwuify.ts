type Replacement = {
    name: string;
    pattern: RegExp;
    val: string;
}

const CONSONANTS = '[bcdfghjklmnpqrstvxyz]';

const theReplacements: Replacement[] = [
    {
        name: 'you to uwu',
        pattern: `you`,
        val: 'uwu'
    },
    {
        name: 'r to w',
        pattern: `r+(?!${CONSONANTS})`,
        val: 'w'
    }
].map(rep => ({ ...rep, pattern: new RegExp(rep.pattern) }));

const uwuifyWord = (input: string): { res: string} => {
    const res = theReplacements.reduce((output, rep) => {
        while (true) {
            const res = output.match(rep.pattern);
            if (res === null) break;
            const [match, ] = res;
            output = output.replace(match, rep.val);
        }

        return output
    }, input);
    
    return { res };
};

const uwuify = (input: string): { res: string } => {
    const res = input
        .split(' ')
        .map(uwuifyWord)
        .map(p => p.res)
        .join(' ');

    return { res };
}

export default uwuify;
