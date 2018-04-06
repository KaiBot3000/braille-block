let dictionary = require('./dictionary.json');
module.exports = {};

let braille = [];

/*
 * Takes cleaned, no spaces text, returns
 * most even configuration for output
*/
module.exports.breakText = breakText;
function breakText(text) {

    // TODO: handle zero length

    const rowWeight = 3;
    const columnWeight = 2;
    let rows, columns, finalColumns;
    let difference = text.length;

    for (let i=1; i<text.length; i++) {
        let columns = i * columnWeight;
        let rows = (text.length / i) * rowWeight;
        // find the lowest mod value for most even block
        // find the lowest difference for most square block
        if (Math.abs(rows - columns) < difference) {
            difference = rows - columns;
            finalColumns = i;
        }
    }
    return finalColumns;
}

/*
 * Converts roman chars to braille chars
*/
module.export.convert = convert;
function convert(char) {
    let braille = dictionary[char];
    return braille;
}

// const splitText = text.replace(' ', '').split('');
