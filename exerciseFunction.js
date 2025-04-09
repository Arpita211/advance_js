/*function stringTonumber(input){
    return `${input}`
}let call = stringTonumber(typeof Number("44"))
if(call === "number"){
    console.log("it is a number")
}else {
    console.log("Not a number")
}
function flipboolean(input){
    return `${input}`
}let ring = flipboolean(typeof Boolean(0))
console.log(ring)*/
function isItTruthy(input){
    if(input === true){
        return "it's truthy!"
    }else{
        return "it's falsey!"
    }

}let result = isItTruthy(true)
//console.log(result)
const a=18
const b=24
/*function add(a,b){
    return a+b
}
console.log(add(18,24))*/
function subtract(a,b){
    return a-b
}//console.log(subtract(18,24))

function Person(name , age){

    this.name = name
    this.age = age
     
    
    
}
let mygreet = new Person("arpita","22")
console.log(mygreet.greet())
function Animal(){
    
    
}
function Dog(){
    
}