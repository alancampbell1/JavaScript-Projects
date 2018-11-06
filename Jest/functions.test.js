

//bringing in the function we are concerned with
const functions = require('./functions');

//Pass in a description, then a function
test('Adds 2 + 2 to equal 4', () => {
	//in expect is where you put your function with any parameters
	//toBe() is a matcher, it contains the value we are looking for
	expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
	//toBe() is a matcher, it contains the value we are looking for
	//using .not means we are looking for the wrong answer
	expect(functions.add(2, 2)).not.toBe(5);
});

/*
	Other matcher functions:
	toBeNull matches only null
	toBeUndefined matches only defined
	toBeDefined is the opposite of toBeUndefined
	toBeTruthy matches anything that an if statement treats a true
	toBeFalsy matches anything that an if statement treats as false
*/


test('Should be NULL', () => {
	expect(functions.isNull()).toBeNull();
});

//test passes because null (being passed in) is a falsy value, 0/undefined also works
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

//returns the opposite to the toBeFaley code - null/0/undefined will fail
test('Should be NOT falsy', () => {
	expect(functions.checkValue(2)).not.toBeFalsy();
});

/*
	toBe() is strictly for primitive types
	Objects/Arrays are 'reference types' in JS so best use the toEqual() function instead
*/
test('User should be Alan Campbell object', () => {
	expect(functions.createUser()).toEqual({firstName: 'Alan', lastName: 'Campbell'});
});


//Checks to see if a value is less than another value
test('Should be under 1600', () =>{
	//You can put your logic straight in here
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

//Checks to see if a value is less than or equal another value
test('Should be less than or equal 1600', () =>{
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});


//You can also test Regular Expressions (i.e. Regex)
//toMatch() is used to match regular expressions
test('There is no I in Team', () => {
	//In this case, its checking if 'I' is not in 'team'
	expect('team').not.toMatch(/I/i);
});


//Work with Arrays - looking for a specific element in an Array
test('Admin should be in usernames', () => {
	//Array created
	usernames = ['john', 'karen', 'admin'];
	//looking for admin in Array 'usernames'
	expect(usernames).toContain('admin');
});


//Working with Async Data
test('User fetched name should be Leanne Graham', () => {
	//assertions are needed when test async code 
	expect.assertions(1);
	//returning the promise
	return functions.fetchUser().then(data => {
		expect(data.name).toEqual('Leanne Graham');
	});
});

//Async Await syntax
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});

