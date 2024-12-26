console.log("arpita");
function say_hello() {
    //  console.log(`i would like to say hello`)
}
setTimeout(() => {
    say_hello();
}, 4000)

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
function fetchDataWithCallback(callback) {
   
}
     
    setTimeout(() => {
         const data = 'Fetched data'
         callback(data);
     console.log( fetchDataWithCallback(data))
    }, 2000);

  
