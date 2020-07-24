const fs = require('fs')
const csv = require('csv-parser')
const randomWords = require('random-words')
const users = [];
//function (firstname, surname) {
  //  return `${firstname[0]}-${surname}`.toLowerCase();
//}
var test = "Seal intact"
fs.createReadStream('mockup.csv')
  .pipe(csv())
  .on('data', function (row) {
    //const username = generateUsername(row.Firstname, row.Surname);
    //const password = randomWords(3).join("-");
console.log(row.Sealintact,'\n') 
})
