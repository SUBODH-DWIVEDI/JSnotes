const arr1 = [1,2,3,4,5] //Array is using heap 
//console.log(arr1.length);
arr1.push(6)//To insert a value at the end of the array 
//  console.log(arr1);
arr1.pop()//To remove a value at the end of the array
//console.log(arr1);
arr1.unshift(0)//To add the value at the start of the array and it will shift the indexof whole array
//console.log(arr1);
arr1.shift()//To remove a value at the start of the array and it will shift the index in reverse direction
//console.log(arr1);

//Question to array
//console.log(arr1.includes(4));//True if it found the value inside the array else false
//console.log(arr1.indexOf(9));//It will show the index of that value if the value exists in that array else it gives -1
//console.log(Array.isArray("AVINASH"));//If it is an array than true else false 

/*Convert to array */
//console.log(Array.from("AVINASH"));//Convert any other datatype to an array
/*slice and splice */
const arr2=[1,2,3,4,5,6,7,8]
const arr3 = arr2.slice(1,3)
//console.log(arr2);
//console.log(arr3);

const arr4 = arr2.splice(1,4)
//console.log(arr4);
//console.log("Original value", arr2);
/*difference between slice and splice
1. slice do not consider the end index value and it will return 1 value before the end point.
2. slice never change the original value but splice will remove the data from original value.
3. splice(starting index, total number of values you want to remove).
*/
const arr5 = [1,2,3,[4,5,6],4,5,[7,8,9,[1,2,3]]]
//console.log(arr5.flat(1));

//Depth work on index of the arrays inside the original array
//Infinity or any value higher than the total index of arrays will show single array.

const array1 = [1,4,9,16]
const map1= array1.map(( x => x * 2 ));
//console.log(map1); //map() creates a new array from calling a function for every array element.
//console.log(array1);// Map method doesn't make any change in the original array
const number =[10,20,30,40,50]
const newArr = number.map(myFunction);//map method creates a new array with result of given function.
function myFunction(num){
    return num * 10;
}
//console.log(newArr);
const ages = [32,33,16,40]
const result = ages.filter(checkAdult);//the filter() method creates a new array filled with elements that pass a test provided by a function.
function checkAdult(age){//The filter() method does not execute the function for empty elements.
  return  age > 18;//filter() method does not change the original array
}
//console.log(result);

//Adding or pushing arrays inside new array
const A1 = [1,2,3,4,5]
const A2 = [6,7,8,9,10]
//A1.push(A2)
//console.log(A1)

const A3 = [...A1, ...A2]//Spread operator will spread the array and add it in a new array
console.log(A3);