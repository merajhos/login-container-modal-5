Question no: 1.What is the difference between var, let, and const? 
Ans:


Feature	var	let	const
Scope	     Function Scope	 Block Scope	 Block Scope
Reassign	 করা যায়	        করা যায়	        করা যায় না
Redeclare	 করা যায়	       করা যায় না	     করা যায় না


 details:
var পুরোনো

let change করা যায়

const change করা যায় না

Question no: 2.What is the spread operator (...) ?

Example (Array)
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];

console.log(newNumbers);

Example (Object)
const user = {name:"Meraj", age:20};

const newUser = {...user, country:"BD"};

Question no: 3. What is the difference between map(), filter(), and forEach() ?

Method   	        কাজ

map()	            নতুন array return করে,,,
filter()	        condition অনুযায়ী array filter করে,,,
forEach()	        শুধু loop চালায় ,,,



map() 
const numberAll = [1,2,3];

const result = numberAll.map(n => n * 2);

console.log(result); ans:[2,4,6]


filter()
const number = [1,2,3,4];

const result = number.filter(n => n > 2); ans:[3,4]


forEach()
const math = [1,2,3];

math.forEach(n => {
 console.log(n);
});             ans: return করে না।


Question no:4 .What is an arrow function ?

Function
function add(a,b){
 return a+b;
}


Arrow Function
const add = (a,b) => a + b;

5.What are template literals?

const name = "Meraj";
const hsc = 2023;

console.log(`My name is ${name} and I am class ${hsc}`);

ans: My name is Meraj and I am class 2023;