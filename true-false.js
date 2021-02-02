// Falsy Value
// - false
// - 0
// - ""
// - undefined
// - null
// - NaN

// Truthy Value
// - any number true except zero
// - empty array or object is true.
// - any string also zero string '0' true.
// - 'false' true

let value = "";
if(value){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

let amount = 0;
if(amount || amount == 0){
    console.log("amount is submitted");
}
else{
    console.log("not submitted");
}
