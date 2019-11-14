const clapCase = (phrase) => {
    if (phrase.length === 0) {
        return "";
    }
    return phrase.replace(/\s/g, " 👏 ") + " 👏";
}

const spongeCase = (phrase) => {
    let charArray = [];

    if (phrase.length === 0) {
        return "";
    }

    for (let i = 0; phrase.length > i; i++) {
        let singleChar = phrase.charAt(i);
        if (i % 2 != 0) {
            charArray.push(singleChar.toUpperCase());
        } else {
            charArray.push(singleChar);
        }
    }
    return charArray.join('');
}

export { spongeCase, clapCase };