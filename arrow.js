const user={

    username:"rahul",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }

}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this)

// function chai(){
//    let username="rahul"
//   console.log(this,username)


// }
// chai()


// const chai=function(){
//     let username="rahul"
//       console.log(this.username)
       
// }
// chai()


// crate a arrow function

const chai =()=>{
    let username="rahul"
      console.log(this)

}

// chai()

// const addTwo = (num1,num2) =>{
//        return num1+num2

// }
// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4))







