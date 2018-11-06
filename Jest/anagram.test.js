const isAnagram = require('./anagram');

//testing to make sure the isAnagram function is an actual function
test('isAnagram function exists', () => {
	expect(typeof isAnagram).toEqual('function');
});


test('Hello is NOT an anagram of Aloha', () => {
	expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

