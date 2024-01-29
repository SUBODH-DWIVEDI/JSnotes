let a = "15"
let b = 35
const fname = "Avinash"
var city = "Jabalpur"
email = "avinash@gmail.com"

console.table([a,b,fname,city,email]);   
/*
do not use var as the system do not understand block scope.
also do not define a variable without let and const.
*/

//const variables can not be changed
const fname = "Anurag"
console.log(fname);