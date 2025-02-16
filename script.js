"use strict"

let num = 525

num = String(num).split('')
let sum = 1
for(let i of num) {
    sum *= i

}

console.log(sum)

sum = sum ** 3

console.log(sum)

sum = String(sum).slice(0, 2)

console.log(sum)