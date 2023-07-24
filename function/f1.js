
// function sayMyName()
// {
//     console.log("Y")
//     console.log("a")
//     console.log("s")
//     console.log("h")
// }
// sayMyName()

// function addTwo(n1, n2) // definition with parameters
// {
//     console.log(n1+n2);
// }

function addTwo(n1, n2) // definition with parameters
{
    // let result = n1+n2;
    // return result;
    
    return n1+n2;
}
const result = addTwo(56,4) //calling with args
// console.log(result);

function loginUserMessage(username)
{
    if(!username){
        console.log("try again") 
    }
     return `${username} just logged in`
}

let p = loginUserMessage()
console.log(p)