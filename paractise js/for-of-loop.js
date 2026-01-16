// for off loop 

const array =[1,2,3,58,8]
for (const i of array) {
    console.log(i);
    
}// no iteration is needed in this for of loop


const greetings = "hello aditya , how are you"
for (const greet of greetings) {
    if(greet==" "){
        continue;
    }
    console.log(`letters are ${greet}`);
    
}