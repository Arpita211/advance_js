console.log("arpita");
function say_hello() {
    //  console.log(`i would like to say hello`)
}
setTimeout(() => {
    say_hello();
}, 4000)
// closure
function outer() {
    let counter = 16
    return function () {
        counter++
        return counter
    }
}
let solution = outer()
//console.log(solution())


function simulateMultipleTasks() {
    console.log(`task 1 finshed`)
    console.log(`task 2 finished`)
}
setTimeout(() => {
    console.log('Task 1 finished');
}, 1000);

setTimeout(() => {
    console.log('Task 2 finished');
}, 2000);

    //clousre
    const greet = (name) => `Hello, ${name}!`;
const limitedGreet = rateLimiter(greet, 2000); 

console.log(limitedGreet("Arpita")); 
setTimeout(() => {
  console.log(limitedGreet("Mannu")); 
}, 1000); 

setTimeout(() => {
  console.log(limitedGreet("Aru")); 
}, 2500); 
    function rateLimiter(fn, limit) {
    let lastCalled = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCalled < limit) {
        return 'Rate limit exceeded';
      } else {
        lastCalled = now;
        return fn(...args);
      }
    };
  }
  
  
