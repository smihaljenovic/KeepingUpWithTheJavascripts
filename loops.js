for(let i=1; i<=100; i++) {
    if(isPrime(i)) {
        console.log('prime');
    }else if(i%3 === 0 && i%5 === 0) {
        console.log(i);
    }else if(i%3 === 0) {
        console.log('Fizz');
    }else if(i%5 === 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
}


function isPrime(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) return false;
    }
    return value > 1;
}
