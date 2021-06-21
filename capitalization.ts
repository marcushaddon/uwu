const transferCapitalization = (orig: string, uwu: string): string => {
    return uwu
        .split('')
        .map((ch: string, idx: number) => {
            return orig[idx] && orig[idx].toUpperCase() === orig[idx] ?
                ch.toUpperCase() : ch;
        }).join('');
};

export default transferCapitalization;
