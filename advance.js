console.log("arpita");
function say_hello(){
    console.log(`i would like to say hello`)
}
setTimeout(()=>{
say_hello();
},4000)

function outer(){
let counter = 16
return function(){
counter++
return counter
}
}
let solution = outer()
console.log(solution())