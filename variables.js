/*
 * Keeping Up With the Javascripts
 *
 * Variables and Constants homework
 */

/*
 * Difference between let, const and var.
 *
 * const variables values can't be changed. It can be modified but not changed.
 * let variables are block scope variables and they can't be user out of block in which they are declared.
 * var variables can be used out of their scope.
 */

// var example
function testVar() {
    var test = true;

    if (test === true) {
        var name = "Bob";
        console.log('Inside if statement: ' + name);
    }

    console.log('Outside if statement: ' + name);
}
testVar();

// let example
function testLet() {
    var test = true;

    if (test === true) {
        let name = "Bob";
        console.log('Inside if statement: ' + name);
    }

    console.log('Outside if statement: ' + name);
}
testLet();

// const example
function testConst() {
    const name = "Mike";
    const numbers = [1,2,3];
    var test = true;

    if (test) {
        numbers.push(4);
    }

    console.log(name);
    console.log(numbers);
}
testConst();


/*
 * HOISTING
 *
 * Hoisting is JavaScript's behaviour in which variables and functions can be used and assigned before they are declared.
 */
name = "Jack";
var name;
console.log(name);

sayHi('Mike');
function sayHi(name) {
    console.log('Hi ' + name);
}
