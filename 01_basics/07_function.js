// function syMyName(){
//     console.log("s")
//     console.log("u")
//     console.log("r")
//     console.log("a")
//     console.log("j")
// }
// syMyName()

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

let result = addTwoNumbers(5, 4);
// console.log(result)

function calculateCardPrise(...num) {
  let count = 0;
  num.map((item) => {
    return (count += item);
  });
  console.log(num);
  return count;
}

// console.log(calculateCardPrise(100, 200, 300, 400, 500));


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username:"suraj",
    price:3999
})

function handleArray(array){
console.log(`This array is ${array[0]}`)
}
handleArray([1,2,3,4,5])