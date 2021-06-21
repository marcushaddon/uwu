const CONSONANTS = '[bcdfghjklmnpqrstvxyz]';

const stutter = (word: string, count = 1): string => {
    if (word.length < 2) {
        return word;
    }

    let prefix: string;
    const leadingConsonants = word
        .match(new RegExp(`^${CONSONANTS}+`, 'i'));
    if (leadingConsonants) {
        prefix = leadingConsonants[0];
    } else {
        prefix = word[0];
    }

    return `${prefix}-`.repeat(count) + word;
};

export default stutter;
