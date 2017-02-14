const React = require('react');
const assert = require('assert');
const something = require('expose-loader?something!./object');

assert.equal(React, global.React, 'React should equal global.React');
assert.equal(React, global.react, 'React should equal global.react');
assert.equal(React, global.whateverthingiwant, 'React should equal global.whateverthingiwant');
assert.equal(something, global.something, 'something should equal global.something');
