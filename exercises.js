
// Exercise 1 - X variable


let X = 10
answer = 1

for (let i=0; i<X; i++){
    answer++
}

console.log(answer * (answer - 1)/2)



// Exercise 2 - Y variable (I got the factors but can't get them to multiply and become the factorial)


let Y = 10

let factors = Y => [...Array(Y + 1).keys()]

console.log(factors(Y))



// Exercise 3 - Z variable


let Z = 10
answer3 = 1

for (let i=0; i<Z; i++){
    answer3++
}

console.log((answer3 / 2) - 0.5)



// Exercise 4 - N variable

let N = 10

for (let i=0; i<10; i++){
 
 let answer4 = N*1

 console.log(`${N} * ${i} = ${answer4}`)
}


// Exercise 5 - A variable

//The array

let A = 10

let exercise5 = A => [...Array(A + 1).keys()]

console.log(exercise5(A))

//The for loop

answer5 = A

for (let i=0; i<=A; i++){

 console.log(`${answer5 - A} and ${answer5}`)
}