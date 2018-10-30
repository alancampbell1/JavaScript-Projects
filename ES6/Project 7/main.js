"use strict"

//An Array created
let myArray = [11, 22, 34, 64];

//creating a set from the Array - from here we can call new methods
let mySet = new Set(myArray);

//add to the set - notice how it is a String, sets can store different types
mySet.add('100');

//This includes adding objects
mySet.add({a: 1, b: 2});


//You can delete entries, e.g. delete value 22
mySet.delete(22);

//To delete everything at once, use clear()
//mySet.clear();

//get size of the set
console.log(mySet.size);

//console.log(mySet);

//we can loop through the set using a forEach
mySet.forEach(function(val){
	console.log(val);
});


//Creating a map object with key value pairs
let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);

//add to the map object
myMap.set('c3', 'foo');

//delete from the map object - using the key as the identifier
myMap.delete('a1');

//get the size of the map object
console.log(myMap.size);

console.log(myMap);


/*
	The following will focus on WeakSet and WeakMap	
*/


//WeakSet object created
let carWeakSet = new WeakSet();
//object created
let car1 = {
	make: 'Honda',
	model: 'Civic'
}
//object added to WeakSet 
carWeakSet.add(car1);

//object created
let car2 = {
	make: 'Toyota',
	model: 'Civic'
}
//object added to WeakSet 
carWeakSet.add(car2);

//delete a car object
carWeakSet.delete(car2);

//contents printed
console.log(carWeakSet);


/*
	Repeating the same but with a WeakMap object that takes key value pairs
*/

//WeakMap object created
let carWeakMap = new WeakMap();

//object created to represent key
let key1 = {
	id: 1
}
//object created to represent values
let car11 = {
	make: 'Honda',
	model: 'Civic'
}

//object created to represent key
let key2 = {
	id: 2
}
//object created to represent values
let car12 = {
	make: 'Toyota',
	model: 'Civic'
}

//both objects used to update the WeakMap object
carWeakMap.set(key1, car11);
carWeakMap.set(key2, car12);

//delete an entire - passing in the key
carWeakMap.delete(key1);

//contents printed to the screen
console.log(carWeakSet);








