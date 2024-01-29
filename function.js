function mySum(num1,num2){  //Function is a block of code designed to perform a particular task
    result = num1 + num2;
    console.log("Hello");
    return result;

}
console.log(mySum(4,5));

resetscore(); //function hoisting - In js, "Hoisting" allows us to use function and variables before they are declared.
function resetscore (){
    console.log("reseting score");
}
const myObj = {
         username : "Avi",
         age: 32
     }

function objData(anyobject)
{
    return `Hello my name is ${anyobject.username} and I am ${anyobject.age} years old`
}

//console.log(objData(myObj)); // Explicitly calling object value by defining object separately

//console.log(objData({username: "Avi", age:32})); //Implicitly defining object while calling the function

const arr1 = [200,400,300]

function myArr(arrData){
    return arrData[2]
}

//console.log(myArr(arr1));
//console.log(myArr([1,2,3,4,5]));

function cartPrice(...num6){
     result = num6
     return result
}

 //console.log(cartPrice(200,300,400,500,600));

// Rest will save all the values provided and convert it into an array.


function myName(username="sam"){ // To pass default value if nothing is passed when calling the function
    //if(!username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} is logged in`
}

//console.log(myName());
const newObj = {
    user: "Subodh",
    age: 23,
    message : function(){
        return (`${this.user} is logged in and age is ${this.age}`)
        
    }
}

 //console.log(newObj.message())

function myName(){
    let username = "Avinash"
    return username
}
// console.log(myName())
// This is not used in function direcetly as it will always return global properties of the function

const newFunc = () => { return user = "Avi"}
// console.log(newFunc())

// const superman = (num1, num2) => num1+num2 // Implicit return
//const superman = (num1, num2) => ({username : "Avinash"}) // Implicit return
//const superman = (num1, num2) => (num1+num2) // -another way to return

//console.log(superman(3,4))

//IIFE -- Immediately Invoked Function Expression
//(function definition)(function invoke)
//()()
//((a)=>{

//})(3) // IIFE with parameters
//(function myNewA(){})() // Named IIFE