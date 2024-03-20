const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`


const arr = [1, 2, 3, 4, 5];
const [head, ...tail] = arr;


// Default values
const [w = 1] = []; // a is 1
const { x = 2 } = { x: undefined }; // b is 2
const { y = 2 } = { y: null }; // c is null

const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];
  
  for (const {
    name: n,
    family: { father: f },
    age
  } of people) {
    console.log(`Name: ${n}, Father: ${f}, Age: ${age}`);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"
  
