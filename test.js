let tape = require('tape');
let brailleBlock = require('./index.js');

tape('calculate columns', function(assert) {
    assert.equal(brailleBlock.breakText('aaaaaa'), 3, 'correct number of columns w/ evenly divisible number');
    assert.equal(brailleBlock.breakText('aaaaaaa'), 3, 'correct number of columns w/ uneven number');
    // TODO: test for longer input, odd input
    assert.end();
})

// TODO: test braille conversion