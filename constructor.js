/*function car( make , model){
    this.make = make
    this.model = model

}
let mycar = new car("Tyota","cam")
console.log(mycar)
 
let newcar = new car("tata","safari")
console.log(newcar)
function tea(type){
    this.type = type
    this.describe = function(){
        return `this is cup of ${this.type}`
    }

} let lemontea = new tea("lemon tea")
console.log(lemontea.describe() )

/*function animal(species,){
    this.species=species
    
}
 animal.prototype.sound = function(){
    return `${this.species} make sound`
 }
 let dog = new animal("Dog")
 //console.log(dog.sound())

 /*function cry(reason){
    if(!new.target){
        throw new Error("please apply new first")
    }
    this.reason = reason
 }
 let mycry = cry("bond")*/
 //console.log(mycry)
 //prototype*/
 let genriccar={
    tyre:4
 }
 let tesla ={
    driver : "AI"
 }
  Object.setPrototypeOf( tesla, genriccar) 
  //console.log(`tesla`,tesla)
  //console.log(`tesla`,tesla.tyre)
  //prototype chain
  Array.prototype.arpita = function(year){
    this.year =year
    return `hii i'm Arpita ${this}  ${this.year}`
  }
  let myArray = [17,12,2002]
  console.log(myArray.arpita(22))
 /* function Animal(){
     
  }
  function Dog(){
    bark(`Woof!`)
  }
  let animal = new Animal()
  let d = new Dog()
Object.setPrototypeOf( Animal )
console.log(Dog.speak())*/
class vehicle{
constructor(make ,model){
    this.make = make
    this.model = model

}

getdetails(){
    return `make:${make} , model : ${model}`
}
}
class car extends vehicle{
    startEngine(){
        return "Engine started"
    }
}
let vc = new constructor("tyota","cam")
let mc = new car()
console.log(mc)