////////////////////////////////////////////////////////////////////
/////// Section 2: Combining Data Types
////////////////////////////////////////////////////////////////////


// 1. Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.

// crayonBox = {
//     colors: ["blue", "orange", "green"],
//     bottle: {                       // 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
//         material: "metal",
//         color: "blue",
//     },
//     receipt: [ // 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
//         "length", 
//         "ink type", 
//             content = {
//             name: "store",
//             price: "55",
//     }],
//     aptBuilding: [ // 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
//         "leasing agents", 
//         "propert manager", 
//         "maintenance",
//         tenants = ["bill", "bob", "mary", "joe"],
//     ]
// }

// console.log(crayonBox.colors[1])
// console.log(crayonBox.bottle.material)
// console.log(crayonBox.receipt[2].name)
// console.log(crayonBox.aptBuilding[3][1])



///////////////////////////////////////////////
//// Combine Objects, arrays, and functions
/////////////////////////////////////////////

//  1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

// const knit = {
//     item: "scarf",
//     size: "6ft",
//     weight: "heavy",

// }

// console.log(knit.item);

// const knit = [
//     "item: scarf",
//     "size: 6ft",
//     "weight: heavy"
// ]

// console.log(knit[2])

// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
    
// const bottle = {
//     cap: {
//         material: "metal",
//         color: "blue",

//     }
// }

// console.log(bottle.cap.material)

// 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

// const receipt = [
//     "length",
//     "type",
//     store = {
//         name: "walmart",
//         price: "$55",
//     }
// ]

// console.log(receipt[2].name)

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

// const apartmentBuilding = [
//     "blah",
//     "blah",
//     tenants = ["bob", "bill", "cynthia"]
// ]

// console.log(apartmentBuilding[2][2])



///////////////////////////////////////////////
//// Combine objects, arrays, and functions 
//// more than one level deep
/////////////////////////////////////////////

// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

// const knit = () => {
//     const wear = { 
//         item: "scarf", 
//         size: "6ft", 
//         feel: "comfy", 
//         class: "designer"
//     }
//     console.log(wear.feel)
// }

// knit()

() => {}

// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

// crayonBox = {
//     colors: ["blue", "orange", "green"],
//     bottle: {                       // 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
//         material: "metal",
//         color: "blue",
//     },
//     receipt: [ // 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
//         "length", 
//         "ink type", 
//             content = {
//             name: "store",
//             price: "55",
//     }],
//     aptBuilding: [ // 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
//         "leasing agents", 
//         "propert manager", 
//         "maintenance",
//         tenants = ["bill", "bob", "mary", "joe"],
//     ]
// }


// console.log(crayonBox.colors[2])

// 3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

// const powerButton = () => {
//     const cd = {
//         genre: "hip hop",
//         volume: "loud",
//         song: "la la la",
//     }
//     console.log(`select the song ${cd.song}`)
// }
// powerButton()


///////////////////////////////////////////////
//// Callbacks
/////////////////////////////////////////////

// Make a function add that takes two arguments (numbers) and sums them together

const numsAdded = (num1, num2) => {
    console.log(num1 + num2) 
}

numsAdded(2, 4)

// Make a function subtract that takes two arguments (numbers) and subtracts them

const numsSubtracted = (a, b) => {
    console.log(a-b)
}

numsSubtracted(5,3)

// Make a function multiply that takes two arguments and multiplies them

const numsMultiplied = (a, b) => {
    console.log(a*b)
}

numsMultiplied(2, 3)

// Make a function divide that takes two arguments and divides them

const numsDivided = (a, b) => {
    console.log(a % b === 0)
}

numsDivided(6, 2)



// Clean up this code, so that it works and has function definitions in the correct place


// const bar = () => {
//     console.log('bar here');
// }

// const foo = () => {
//     console.log('foo here');
// }

// bar();
// foo();

// What is meant by the error(s) this produces?



const foo = ()=>{
    console.log('hi');
}

foo();