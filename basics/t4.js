// console.log(2>1)

// console.log("2">1)

// console.log(null<0);
// console.log(null>=0);
// console.log(null==0);

// stack, heap
//premitive => stack
// non=premitive => heap


let myYoutubename= "Yashhhh"

let anothername= myYoutubename // refference variable
anothername = "chai"
console.log(anothername)

let user = {
    email:"user@google.com",
    upi: "use@oksbi"
}

let usertwo = user
usertwo.email="he@google.com"

console.log(usertwo.email)
console.log(user.email)