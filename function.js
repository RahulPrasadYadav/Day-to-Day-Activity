
function sayMyname(){
    console.log("r")
    console.log("a")
    console.log("h")
    console.log("h")
    console.log("u")
    console.log("l")


}

// sayMyname()

// function addTwoNumber(number1,number2){
//       console.log(number1+number2);

// }
function addTwoNumber(number1,number2){
      
      let result=number1+number2
       return result;

}
// addTwoNumber(4,5);
// addTwoNumber(3,"2")
// addTwoNumber(3,"a")
// addTwoNumber(3,null)
// addTwoNumber(3,undefined)

const result=addTwoNumber(5,6)

// console.log(result)


function loginUsermessage(username){

       if(username===undefined){
            console.log("enter the username");
            return
            
       }
      return `${username} just logged in`
}

// console.log(loginUsermessage());


function calculatecartPrice(...num1){
     return num1



}


console.log(calculatecartPrice(20,20,20));


const user={
      username:"Rahul",
      price:123

}
function handelObject(anyobject){
     console.log(`user name is ${anyobject.username} the price is ${anyobject.price}`)
      
}

// handelObject(user)
handelObject({
     username:"sam",
     price:345
})

 // array in function
const myNewArray=[200,200,300]


function returnsecondvalue(getarray){
        return getarray[1]

      
}

console.log(returnsecondvalue(myNewArray));











 