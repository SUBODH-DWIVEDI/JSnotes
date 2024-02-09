// const arr = [1, 2, 3, 4, 5];

// for (const myarr of arr) {
//   console.log(myarr);
// }



const map = new Map();

map.set("Js", "Javascript");
map.set("Cpp", "C plus plus");
map.set("Rb", "Ruby");
map.set("Sw", "Swift");

for (const [key, value] of map) {
  console.log(`${key} is the shortcut for :- {value}`);
}