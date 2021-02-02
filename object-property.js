const students = [
    { id: 21, name: "Omar" },
    { id: 31, name: "Sharif" },
    { id: 41, name: "Limon" },
    { id: 71, name: "Karim" },
]

const names = students.map(student => student.name);
const ids = students.map(student => student.id);
console.log(names);
console.log(ids);

// Students id greater than 40
const newId = students.filter(student => student.id>40);
console.log(newId);
// only one Id
const findId = students.find(student => student.id>40);
console.log(findId);