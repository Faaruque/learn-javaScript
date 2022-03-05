let obj = {
    x: 10,
    y: 20,
    z: 30
}
console.log('x' in obj)

// for in loop object
for (let i in obj) {
    console.log(i)
    console.log(obj[i])
}