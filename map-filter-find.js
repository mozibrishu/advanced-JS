// Map
// - pass function  
// - element index and full array
// - return new array

// filter
// - pass function
// - return array 
// - array with those elements who returns true value.
// - The filter() method creates an array filled with all array elements 
//     that pass a test (provided as a function).
// - if no element pass, return empty array

// Generally 
// - "map" means converting a series of inputs to an equal length series of outputs  
// - "reduce" means converting a series of inputs into a smaller number of outputs.
// - Reduce method of the array object is used to reduce the array to one single value.

// find
// - special version of filter
// - return one value (first true value)

const numbers = [2,5,8,11,14,17,21];

// map parameters
numbers.map(function(element,index,array){
    console.log(element, index, array);
})

// map
const afterSquare = numbers.map(element => element * element);
console.log(afterSquare);

// filter
const bigger = numbers.filter(x => x>6);
console.log(bigger);

// reduce :to a single value
const reduce = numbers.reduce((acc,value)=> acc = acc + value);
console.log(reduce);

//find
const find = numbers.find(x => x%7 == 0);
console.log(find);