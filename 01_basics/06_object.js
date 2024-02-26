const symKey = Symbol("key");
const jsUser = {
  name: "suraj",
  "full name": "suraj yadav",
  email: "suraj123@gmail.com",
  age: 20,
  location: "noida",
  [symKey]: "symbol",
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[symKey]);

// Object.freeze(jsUser)

jsUser.greeting = function () {
  return "hello js user";
};
jsUser.greeting2 = function () {
  return `hello js user ${jsUser["full name"]}`;
};
// console.log(jsUser.greeting2())

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" ,3:"b"};

// console.log({obj1,obj2})

// let obj3 = Object.assign( obj1, obj2);
let obj3={...obj1,...obj2}
console.log(obj3)
