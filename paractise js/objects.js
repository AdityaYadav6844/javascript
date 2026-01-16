// to declare a object (object literal)

const mysym = Symbol("mykey")// declaRING symbole(datatype) to use in object


const jsUser = {// object = jsUser
    name : "Aditya",
    email : "adiuk07@gmail.com",
    "full name" : "ADITYA YADAV",
    Location : "dehradun",
    age: 20,
    isLogedin : false ,
    mysym : "mykey2",// this will be treated as a string not Symbole
    [mysym]: "mykey3"// this will be treated as a SYSMBOL 
}
console.log(jsUser.email);
console.log(jsUser["email"]);// this is the good way to access the object 
console.log(jsUser["full name"]); // "full name" can access only by this [""] 
console.log(jsUser["Location"]);
console.log(jsUser.age);

// jsUser.email= "yadav@1h3"
// Object.freeze(jsUser)
// jsUser.email= "yadav@789"// does not change the object because its freez
// console.log(jsUser.email);
// console.log(jsUser);
/**{
  name: 'Aditya',
  email: 'yadav@1h3',
  'full name': 'ADITYA YADAV',
  Location: 'dehradun',
  age: 20,
  isLogedin: false,
  mysym: 'mykey2',
  Symbol(mykey): 'mykey3'
} */


  // adding a function in OBJECT
// jsUser.greetings = function(){
//     console.log("hello!world");
// }
// // printing the name in the which is declared in the jsUser object 
// jsUser.greetings2 = function(){
//     console.log(`Hello world ${this.name}`);// this keyword help to go into the object and access the keys
   
// }
// console.log(jsUser.greetings());
// console.log(jsUser.greetings2());

