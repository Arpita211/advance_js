class vehicle{
    constructor(make,model){
        this.make =make
        this.model = model
    }
    start(){
        return `${this.model} is a car of ${this.make}`
    }
}
class fourWheels extends vehicle{
    stop(){
        return `${this.make} is on top by ${this.model}`
    }

}
let mycar = new  fourWheels("tyota","cam")
console.log(mycar.start())
console.log(mycar.stop())
function Animal(){
    return `dog is barking`
}
function DOG(){
   
    let dog = Object.create(Animal.prototype)
    console.log(dog)
}
