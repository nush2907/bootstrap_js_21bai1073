const obj1 = {name:"Raj", age: 21, degree: "B.E"};
       
console.log(obj1.name);
console.log(obj1["name"]);


// for in loop is used get the property of the object
for(let x in obj1)
{
    console.log(x); //name, age, degree
}


// print the value of an object
for(let x in obj1)
{
    console.log(obj1[x]); //Raj, 21, B.E
}
//new keyword
const obj2 = new Date();