const user = {
    username: "Yash",
    price: 999,


welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`)
    console.log(this.username);
} 

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this)
// }

// chai()

// const chai = () => {
//     let u ="Yash"
//     console.log(this.username)
// }

// chai()

// const addtwo = (n1,n2) => {
//     return n1+n2
// }
// const addtwo = (n1,n2) =>  n1+n2
// const addtwo = (n1,n2) =>  (n1+n2)
const addtwo = (n1,n2) =>  ({username: "Yash"})

console.log(addtwo(2,3))

const myArray = [1,2,3,4,5,6]

// myArray.forEach (()=> )
