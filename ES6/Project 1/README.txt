The complete information on how to set up Babel on Mac comes from:
https://babeljs.io/setup#installation

- Create a new Project called ES6.
- create a package.json file with 'npm init'
- then 'npm install babel-cli babel-preset-es2015 --save-dev'
- create a .babelrc file using the following commands:
	'npm install --global create-babelrc'
	'create-babelrc'
	'open .babelrc' to view the results
- In the package.json file add the following under main:
	"scripts": {
		"build": "babel src -d dist"
	},
	"scripts": {
		"build": "babel --presets es2015 src -d dist"
	},
- In main.js in the src file add the following:
	let test = 'Hello';
- In the terminal type - 'npm run build'
- Open the main.js file in the dist folder to view the convert code in ES5.