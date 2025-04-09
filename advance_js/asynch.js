//console.log(`hello Arpita`);
function sayHello(){
//console.log("i would like to say hello");

}
setTimeout(() => {
    sayHello()
}, 4000);
for (let index = 0; index < 10; index++) {
   //console.log(index);
    
    
}


//clousur
function counter(){
    let counter = 4
    return function(){
        counter++
        return counter
    }
}
let increment = counter()
//console.log(increment())
//promises
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = true
            if(success){
                resolve("data fetched successfully")
            }else{
                reject("error fetching data")
            }

        },3000)
    })
}
fetchData()
.then((data)=>{
    console.log(data)
    return `Arpita`

})
.catch((error)=>{
  //  console.log(error)
    return error.toUpperCase()

})
// protypal inheritance
 function pro( name){
    this.name = name
}
pro.prototype.greet = function(){
    //console.log(`hello Arpita`)
}
let arpita = new pro(`arpita`)
arpita.greet()
// this and binding context
const obj = {
    name : "Arpita",
    welcome(){
        console.log(`hello my mame is ${this.name}`)

    }
}
obj.welcome()
welcomehost = obj.welcome
welcomehost()
welcomeper = obj.welcome. bind({name : "nish"})
welcomeper()

