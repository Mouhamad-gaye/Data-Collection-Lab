// //Part 3 & Part 4

let csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
let rows = csvString.split('\n')
let header = rows[0].split(',')
let lowCaseCsv = csvString.toLowerCase()
console.log(lowCaseCsv)


let allObjects = []

 allObjects.push({ id: '42', name: 'bruce',  occupation: 'knight', age: '41' })
 allObjects.push({ id: '57', name: 'bob',    occupation: 'fry cook', age: '19' })
 allObjects.push({ id: '63', name: 'blaine', occupation: 'quiz master', age: '58' })
 allObjects.push({ id: '98', name: 'bill',   occupation: "doctor's assistant", age: '26' })
 allObjects.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" })
 allObjects.push({ id: "7", name: "Bilbo",   occupation: "None", age: "111" })

console.log(allObjects)
 
let allAges = [41, 25, 19, 58, 111]
let total = 0

for (let i = 0; i < allAges.length; i++){
    total = total + allAges[i]
}
let average = total / allAges.length
console.log(average)

























