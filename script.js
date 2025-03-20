// this line says that this is the variable csvstring and the value is csv file converted into string.
let filename = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


let rows = filename.split (`\n`); // since the filename (csv) is separated with new line char (\n), the split method will help to separate the strings into rows.

// Now I want to split the top line (ID, name, occupation, age)
let topRow = rows[0].split(`,`);

// Create an array where you will put the rest of the rows ( values of the object), it is empty now
let ArrayOfObjects = [];

for (let i = 1; i < rows.length; i++){
    console.log(i)
    let secondRowVal = rows[i].split(',')
    if( secondRowVal.length === topRow.length)
        console.log(secondRowVal)
    topRow.unshift[0]
    console.log(topRow)
}















    