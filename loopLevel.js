let tea = ["masala chai", "hearbal tea","chay","green tea"]
let selectedTeas = []
/*for (let i = 0; i < tea.length; i++){
    if(tea[i] ==="chay"){
        break
    }
    selectedTeas.push(tea[i])
}
console.log(selectedTeas)
if(tea[i]==="chay"){
    continue
}
selectedTeas.push(tea[i])
}console.log(selectedTeas)*/
/*for (const _String of tea) {
    if(_String==="chay"){
        break
    }
    selectedTeas.push(_String)
    
}console.log(selectedTeas)
for (const _String of tea) {
    if(_String==="chay"){
        continue
    }selectedTeas.push(_String)
    
}console.log(selectedTeas)
tea.forEach(function(_chay){
    if(_chay=== "chay"){
        return
    }
    selectedTeas.push(_chay)
} )
console.log(selectedTeas)
let arr1 = [2,5,7,9]
let doubleNumber = []
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]===7){
        continue
    }
    doubleNumber.push(2*arr1[i])
    
    
}console.log(doubleNumber)*/
for (const  _mytea of tea) {
    if(_mytea.length > 10){
        continue
    }
    selectedTeas.push(_mytea)
    
}console.log(selectedTeas)
    
