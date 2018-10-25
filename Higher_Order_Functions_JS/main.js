const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
	forEach - a easier way to loop through an array, 
	it does return anything back to you.
	More elegant way to loop through
*/

//For Loop
//Comparing a basic for loop - printing the names of the companies
for(let i = 0; i < companies.length; i++){
	//console.log(companies[i]);
}

//forEach Loop
//takes an array and a callback function (synchronous)
//callback can take 3 things - an iterator, index and the entire array
companies.forEach(function(company){
	//console.log(company);
});


/*
	Filter - allows us to filter things out from the Array.
	For example, all the ages that are 21 and over from the ages array
*/

//If using a for loop

//Define an empty array to populate our filtered values with
let canDrink = [];

for(let i = 0; i < ages.length; i++){
	if(ages[i] >= 21){
		//push the value onto the empty array
		canDrink.push(ages[i]);
	}
}
//console.log(canDrink);

//Using filter
const canDrink1 = ages.filter(function(age){
	if(age >= 21){
		//no need to create an array and push values onto it
		return true;
	}
});
//console.log(canDrink1);

//put onto one line using ES6 arrow functions
const canDrink2 = ages.filter(age => age >= 21);
//console.log(canDrink2);

//Filter retail companies

const retailCompanies = companies.filter(function(company){
	if(company.category === 'Retail'){
		return true;
	}
});
//console.log(retailCompanies);

//using ES6 arrow functions
const retailCompanies1 = companies.filter(company => company.category === 'Retail');
//console.log(retailCompanies1);

//get 80's companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//console.log(eightiesCompanies);

//companies that last at least 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
//console.log(lastedTenYears);

/*
	Map- instead of just filtering out you can create new Arrays of anything.
	From a current Array
*/

//Create Array of Company names
const companyNames = companies.map(function(company){
	return company.name;
});
//console.log(companyNames);

//If we wanted an array of: name, start and end year we do the following:
const testMap = companies.map(function(company){
	return `${company.name} [${company.start} - ${company.end}]`;
});
//console.log(testMap)

//Short hand version
const testMap1 = companies.map(company => `${company.name} [${company.start}] - ${company.end}`);
//console.log(testMap1);

//Using the ages array, we'll take each value and find the square root

const agesSquare = ages.map(age => Math.sqrt(age));
//console.log(agesSquare);
const agesTimesTwo = ages.map(age => age * 2);
//console.log(agesTimesTwo);

//Square each value then multiple by 2 - adding multiple features
const ageMap = ages
	.map(age => Math.sqrt(age))
	.map(age => age * 2);
//console.log(ageMap);

/*
	Sort: arrange the values according to something
*/


/*
	Sorting the companies by their start year:
	We pass in two values, i.e. two company's start dates
	We then return 1 or -1 to move the company's position in the Array
*/
const sortedCompanies = companies.sort(function(c1, c2){
	if(c1.start > c2.start){
		return 1;
	} else {
		return -1;
	}
});
//console.log(sortedCompanies);

//Short hand version using a ternary operator
const sortedCompanies1 = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//console.log(sortedCompanies1);

//sorting a single array
const sortAgesAsc = ages.sort((a, b) => a - b);
//console.log(sortAgesAsc);
const sortAgesDes = ages.sort((a, b) => b - a);
//console.log(sortAgesDes);


/*
	Reduce - can be used for many features
*/

//using reduce to add the ages together in the ages array

//using a for loop - too long
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
	ageSum += ages[i];
}
//console.log(ageSum);

const ageSum1 = ages.reduce(function(total, age){
	return total + age;
}, 0);

//console.log(ageSum1);

//Short Hand function
const ageSum2 = ages.reduce((total, age) => total + age, 0);
//console.log(ageSum2);

//Getting the total years for all companies - the range of each company will add up

const totalYears = companies.reduce(function(total, company){
	return total + (company.end - company.start);
}, 0);
//console.log(totalYears);

//shorter way using arrow functions
const totalYears1 = companies.reduce((total, company) => total + (company.end - company.start), 0); 
//console.log(totalYears1);



/*
	The above methods - filter, map, sort, reduce - can be combined.
*/

const combined = ages
	.map(age => age * 2)			//creates an array of all the ages * 2
	.filter(age => age >= 40)		//filter out anything under 40
	.sort((a, b) => a - b)			//sort in ascending order
	.reduce((a, b) => a + b, 0);	//add all the values together


console.log(combined);

