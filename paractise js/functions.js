function calulatecart(num1){
    return num1
}
console.log(calulatecart(200))
console.log(calulatecart(200,400,500))// returns only num1=200

function calulatecart2(...num1){// spread operater is used in this 
    return num1
}
console.log(calulatecart2(200,400,500)) //returns an array of [200,400,500]

function calulatecart3(x,y,...num1){
    console.log(x,y)
    return num1
    
}
console.log(calulatecart3(200,400,600,4000,500))
/*OUTPUT
200
200
[ 200, 400, 500 ]
200 400
[ 600, 4000, 500 ]*/


//PASSING OBJECT AND ARRAY IN FUNCTIONS 

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and age of the student is ${anyobject.age}`)

}
const user ={
    username : "aditya yadav",
    age : 21
}
// handleobject(user)
handleobject({//object declaration in the function call
    username: "yadav",
    age: 54

})


//ARRAY IN FUNCTIONS
const myarr=[20,30,4,0,8,5]
function handlearray(anyarray,index){
    return anyarray[index]
}
//handlearray(myarr,3)
handlearray([12,56,4,2,58],4)