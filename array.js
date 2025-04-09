/*let teaflower = ["green tea","black tea","oolang tea" ]
console.log(teaflower[0])
let firstTea = teaflower[0]
console.log(firstTea)
let cities = ["Londan","Tokyo","Paris","New York"]*/
//let favouritecity = cities[2]/*
//console.log(favouritecity)

let teaType = ["hearbal tea","white tea","masala"]
/*teaType[1] = "jasmine tea"
console.log(teaType)*/
/*let citievisited = ["mumbai","sydney"];
citievisited.push ="Berlin";
console.log(citievisited);
 let lastType= teaType.pop()
 console.log(teaType)*/
  let softTea = teaType
 /* teaType.pop()
  console.log(softTea)
  console.log(teaType)*/
  //softcopy when change in one array shows in other also
  let hardcopy = [...teaType]
  teaType.pop()
 // console.log(hardcopy)
  //console.log(teaType)
  let worldtea = teaType.concat(hardcopy)
 // console.log(worldtea)
 // console.log(worldtea.length)
 let ismasalachay = teaType.includes("hearbal tea")
 console.log(ismasalachay)





