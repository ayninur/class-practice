////////////////////////////////////////////////////////////////////
/////// Section 2: Combining Data Types
////////////////////////////////////////////////////////////////////


// 1. Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.

crayonBox = {
    colors: ["blue", "orange", "green"],
    bottle: {                       // 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
        material: "metal",
        color: "blue",
    },
    receipt: [ // 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
        "length", 
        "ink type", 
            content = {
            name: "store",
            price: "55",
    }],
    aptBuilding: [
        "leasing agents", 
        "propert manager", 
        "maintenance",
        tenants = ["bill", "bob", "mary", "joe"],
    ]
}

console.log(crayonBox.colors[1])
console.log(crayonBox.bottle.material)
console.log(crayonBox.receipt[2].name)
console.log(crayonBox.aptBuilding[3][1])
