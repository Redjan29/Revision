// lib.test.js
const { test } = require('vitest');
const add = require('./lib');

test('add function adds two numbers', (t) => {
  t.is(add(2, 3), 5);
});
