let obj1 = {
    a: 10,
    b: 20
}
let obj2 = {
    a: 10,
    b: 20
}
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true)
} else {
    console.log(false)
}

// two object convert string
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))