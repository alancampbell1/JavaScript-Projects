
const reverseString = require('./reverseString');

//test to see if function exists
test('reverseString function exists', () => {
	expect(reverseString).toBeDefined();
});

//to test if function works, i.e. reverses a String
test('String reverses', () => {
	expect(reverseString('hello')).toEqual('olleh');
});

//to test if function works, i.e. reverses a String
test('String reverses with H as uppercase', () => {
	expect(reverseString('Hello')).toEqual('olleh');
});