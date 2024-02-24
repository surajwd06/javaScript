// Primitive data types : primitive data is call by value this is 7 types

// String, Number, Boolean, null, undefined , Symble, BigInt

let num=100;

let str="Hello world";

let score=100.3;

let isLoading=false;

let outSideTemp=null;

let userEmail;

let id=Symbol("123")
let anotherId=Symbol("123")
console.log(id==anotherId)

let bigNumber=456454646456465465754123136n;
console.log(bigNumber)

// Refrence (Non Primitive Data type) : Non primitive data type is call by refrence
// Array, Object, function


const devs=["ReactJs","Javascript","NodeJs","Python"];

const myObj={
    name:"suraj",
    age:20
}
const myFun=function (){
    console.log("Non Primitive data types")
}
myFun();
console.log(typeof  myFun);

// Memory in javaScript 

// Stack (Primitive data type), Heap (Non Primitive data type)
//Stack
let myName="suraj";
let newName=myName;
newName="pawan"
console.log(myName)
console.log(newName)

// heap
let userOne={
    userName:"suraj@google.com",
    upi:"suraj@ybl"
}
let  userTwo=userOne;
userTwo.userName="pawan@google.com"
console.log(userOne)
console.log(userTwo)