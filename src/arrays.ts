/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 0) {
        const newArray = [numbers[0]];
        const finalArray = [...newArray, numbers[numbers.length - 1]];
        return finalArray;
    } else {
        const finalArray: number[] = [];
        return finalArray;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((a: number): number => 3 * a);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((word: string): number =>
        isNaN(parseInt(word)) ? 0 : parseInt(word)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((word: string): number => {
        if (isNaN(parseInt(word))) {
            word = word.substring(1);
            if (isNaN(parseInt(word))) {
                return 0;
            } else {
                return parseInt(word);
            }
        }
        return parseInt(word);
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isQuestion = (word: string): boolean =>
        word.substring(word.length - 1) !== "?";
    const message = messages.filter(isQuestion);
    const finalMessage = message.map((word: string): string =>
        word.substring(word.length - 1) === "!" ? word.toUpperCase() : word
    );
    return finalMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    const newColors = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return newColors.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const added = addends.join("+");
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum + "=" + added;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const a = values.findIndex((value: number): boolean => value < 0);
    if (a === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, sum];
    } else {
        const newArray = [...values];
        const sum = newArray.reduce(
            (currentTotal: number, num: number) =>
                newArray.indexOf(num) < a ? currentTotal + num : currentTotal,
            0
        );
        newArray.splice(a + 1, 0, sum);
        return newArray;
    }
}
