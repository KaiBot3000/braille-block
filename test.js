let tape = require('tape');
let brailleBlock = require('./index.js');

tape('calculate columns - round number', function(assert) {
    assert.equal(brailleBlock.breakText('aaaaaa'), 3, 'correct number of columns');
    assert.end();
})

