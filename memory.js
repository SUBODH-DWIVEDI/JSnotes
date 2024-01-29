let one ="Avinash"
let two = one
two = "aakash"
console.log(one);
console.log(two);
//In stack always a copy of data is passed.So the original value never change.
let oneObje={
    fname:"Atul",
    age:32
}
let twoObj = oneObje
twoObj.fname = "nitin"
console.log(oneObje.fname);
console.log(twoObj.fname);
//In heap the original data is passed.If you change the second variable it will change the original data as  well.