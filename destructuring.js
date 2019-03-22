/*
 * Keeping Up With the Javascripts
 *
 * Homework Assignment #10: Destructuring
 */

/*
 * Difference between destructuring an object and destructuring an array.
 *
 * When we are destructuring array, we assign each element of array in another variable, but when we destructuring objects, then we assign desire attribute in single variable.
 * Even with arrays or objects, we can destructure whole array / object, or desire element / attribute;
 */


// destructuring arrays
let array1 = [1,2,3,4,5];
const [no1, no2, , no4, ] = array1;
console.log(no1, no2, no4);

let users = [{ name: 'Jack', age: 20}, { name: 'Bob', age: 43}];
const [jack, bob] = users;
console.log(jack, bob);


// destructuring objects
const {age} = jack;
console.log(`Jack is ${age} age old.`);


for (const {name: n, age: a} of users) {
    console.log(`${n} is ${a} years old.`);
}
