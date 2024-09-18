//Working with Javascript
//we can take all of our notes here and save them to read when we review later

//console.log('hello world!')

//when we combine strings and numbers, it will work for division,
//subtraction, and multiplication
//it will NOT work as expected for addition
//because of string concatenation, which is when the characters combine

//console.log(10 % 3) % gives the remainder

//Math. class

//console.log(Math.pow(3,2))

//Math.random()*10 //gives a random number

//Math.floor  //rounds down
//Math.ceiling //rounds up
//Math.round //rounds to the nearest integer

let age = 33
let firstName = 'Michael'
monthsInYear = 12
let ageInMonths = age * monthsInYear
//console.log(ageInMonths)
 
//string interpolation
//console.log(`Hello my name is ${firstName} and I am ${age} years old`)

//AND && ==> both have to be true
//OR || ==> only one has to be true
//NOT ! ==> always goes to the logical opposite

//ARRAYS are ways to store data

let cheeses = ['brie', 'gouda', 'edam', 'pepperjack']
//console.log(cheeses)

//Objects are stored in {}
//they can contin different types of data
//they are used throughout the web

const user = {
    username: 'fakeuser123',
    password: 'password123!',
    id: 1273,
    isLoggedIn: false
}
//console.log(user)

let friends =['moe', 'larry', 'curly', 'brittany', 'ashley', 'aisha']

//console.log(friends)

//console.log(friends[5])

//console.log(friends.length)

const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9, 10]] 

//console.log(annoyingArray[2][0])

const fruits = ['apple', 'orange', 'kiwi', 'banana', 'mango', 'papaya', 'pineapple']

//console.log(fruits.length)

//console.log(fruits[2])

//console.log(`I am hungry I think I'll have a ${fruits[2]}`)

//toString converts the array into a single string
//console.log(fruits.toString())

//.pop() removes the last item
//fruits.pop()

//.push will add items to the end of a list
//fruits.push('peach')

//.shift removes the first (0th) item of the array
//fruits.shift()

//.unshift puts the item at the start of the array
//fruits.unshift('pitaya')

//.reverse reverses the order of the array


fruits.reverse()

console.log(fruits)



