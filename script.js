// Part 1 & 2



let filename = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let rows = filename.split (`\n`); 
let topRow = rows[0].split(`,`);

let array = []
let object = {}

for (let i = 0; i < rows.length; i++){
    array.push(rows[i].split(','))
console.log(array)
}

for (let i = 0; i < rows.length; i++){
  let secondRowVal = rows[i].split(',')
    if( secondRowVal.length === topRow.length){
        console.log(secondRowVal)
    } 
}


    

    










//create a array variable 
//Put the boxes inside the big box
//print it out 



























    