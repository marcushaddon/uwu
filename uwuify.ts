type Replacement = {
    name: string;
    pattern: RegExp;
    val: string | ((match: string) => string);
}

type ReplacementCommand = {
    match: RegExpMatchArray;
    replacement: string | ((match: string) => string);
}

const CONSONANTS = '[bcdfghjklmnpqrstvxyz]';

const theReplacements: Replacement[] = [
    {
        name: 'you to uwu',
        pattern: `you`,
        val: 'uwu'
    },
    {
        name: 'th to ff',
        pattern: '(?<!^)th(?!e$)',
        val: 'ff'
    },
    {
        name: 'r to w',
        pattern: `r+`,
        val: 'w'
    },
    {
        name: 'l to w',
        pattern: 'l+',
        val: 'w'
    },
    {
        name: 'tt to dd',
        pattern: 'tt',
        val: 'dd'
    }
].map(rep => ({ ...rep, pattern: new RegExp(rep.pattern) }));

const getViableCommands = (input: string): ReplacementCommand[] => {
    return theReplacements.reduce((cmds, rep) => {
        const match = input.match(rep.pattern);
        if (match === null) return cmds;
        return [ ...cmds, { match, replacement: rep.val }]
    }, [] as ReplacementCommand[]);
};

const uwuifyWord = (input: string): string => {
    const cmds = getViableCommands(input);
    
    return cmds
        .reduce((output, cmd) => {
            const val = typeof cmd.replacement === 'string' ? cmd.replacement : cmd.replacement(cmd.match[0]);
            return output.replace(cmd.match[0], val);
        }, input);
}

const uwuify = (input: string): { res: string } => {
    const res = input
        .split(' ')
        .map(uwuifyWord)
        .join(' ');

    return { res };
}

export default uwuify;
