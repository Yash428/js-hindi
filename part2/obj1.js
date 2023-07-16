//singleton
// Object.create
// object literals
// const mySym = Symbol("key1")

const JsUser = {
    name: "Yash",
    "full name": "Yash Patel",
    mySym: "key1",
    age: 18,
    location: "Vadodara",
    email: "yash42879@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// //console.log(JsUser[email])  // dont work
// console.log(JsUser["email"])

// //console.log(JsUser.full name) //wont work
// console.log(JsUser["full name"])

// console.log(typeof JsUser.mySym)
// //console.log(JsUser[mySym1])

// JsUser.email = "yash@chat.com"
// Object.freeze(JsUser)
// JsUser.email = "yash@chatgpt.com"
// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())

