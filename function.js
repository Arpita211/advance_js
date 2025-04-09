function makeTEA(_tea) {
      return `making   ${_tea}`
}
 let teaOrder = makeTEA("green tea")
   // console.log(teaOrder)
 function orderTea(_teaType){
    function confirmOrder(){
        return `order confirm for chai`
    }
    return  confirmOrder()
 }
 let confirmation = orderTea("masala chai")
 //console.log(confirmation)
 const calculateTotal =( price , quantity)=>{
    return price* quantity

 }
 let toatalCost = calculateTotal(499 ,100)
 //console.log(toatalCost)
 function makeTea( typeofTea){
    return `makeTea:${typeofTea}`
 }
 function processTeaorder( teaFunction){
    return teaFunction("earl grey")

 }
 let order = processTeaorder(makeTea)
 //console.log(order)
 /*function TEA(typeofTea){
   return `the tea type is ${typeofTea}`
 }

 function createTeamaker( functionTea){
   return functionTea ("green tea")
 }
 let teamaker = createTeamaker(TEA)
 console.log(teamaker)*/
 function createTeamaker(name){
   let score = 100
    return function(Teatype){
      return `making ${Teatype} ${name} ${score}`
    }
 }let Teamaker = createTeamaker("Arpita")
 console.log(Teamaker("green tea"))
 
 
