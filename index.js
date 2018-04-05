
// const splitText = text.replace(' ', '').split('');
let dictionary = require('./dictionary.json');

module.exports = {
    breakText: breakText,
    convert: convert
}

let braille
// takes cleaned, no spaces text, returns most even
// configuration for output
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

/* converts string into array of arrays braille
using object
- clean text- no spaces, array
- calculate configuration
- while (characters)
    - iterate over (columns) characters
        - push onto row((n*3)+i) arrays (first row will be 0, 1, 2, 2nd 3, 4, 5)

*/


function convert(char) {
    let braille = dictionary[char];
    return braille;
}

