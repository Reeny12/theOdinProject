//add.test.js
const add = require("./add");

test('adds 1 + 2 to equal 3', () => {
  expect(add.add(1, 2)).toBe(3);
});