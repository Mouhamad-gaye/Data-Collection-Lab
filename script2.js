const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell = '';

for (let char of csvString) {
    if (char === ',' || char === '\n') {
        process.stdout.write(cell + ' '); 
        cell = ''; 
        if (char === '\n') console.log();
    } else {
        cell += char; 
    }
}

if (cell) console.log(cell); 