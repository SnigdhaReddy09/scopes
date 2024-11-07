// global scope
var a="hello"
var b=" everyone"
var c=a+b  // a,b,c can be accessible anywhere in the js file
console.log(c)

// block scope
if (1) {
    let a1 = "snigdha"
    console.log(a1)  // a1 is accessible only inside the block
}

// function scope or local scope
function a2() {
    var z = "This is a variable inside funtion block"
    console.log(z)   // z is accessible only inside the function block
}
a2()