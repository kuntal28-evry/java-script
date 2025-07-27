"use strict"; // treat all js code as newer version

//alert("hello") we are using nodejs not browser 

let name = "kuntal "
let age = 18 
let isLoogedIn = false 


//number = 2to power 53
// bigint = big number 
// string 
//boolean 
//null = standalone value 
// undefined = value not define 
// symbol = uniqness findout 

//object 

console.log(typeof "kuntal")
console.log(typeof null)


//stack (primative). heap(non primative)

let myName = "kuntal"
let anothername = myName
anothername = "chaiaurcode"

console.log(anothername)


let userOne ={
    email : "user@gmail.com" ,
    upi : "user@ybl"
} 

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
