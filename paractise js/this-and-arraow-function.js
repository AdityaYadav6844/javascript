const user={
    username : "aditya",
    age :21 ,
    message: function say(){
        console.log(`say my name is ${this.username} and my age is ${this.age}`)
        console.log(this)
    }
}
user.username="sam"
user.message()
console.log(this)//empty
