const fun1 = (name) => {
    if(name=="subodh"){
        console.log(`my name is ${name}`);
    }
    else{
        console.log(`name not found`);
    }
    return name;
}
fun1("subodh");

//...implicit return type
let userId = (id) => ({id: "ttbs700144"})
console.log(userId());

//...IIFE...
//Unnamed IIFE
((name)=>{
    console.log(`DB connected ${name}`);
})("Subodh");
(function chai(){
    console.log(`DB connected again`);
})();