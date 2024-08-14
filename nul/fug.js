// Example object
const person = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    }
};

// Destructuring assignment
const { name, age, address: { city, zip } } = person;

console.log(name);  // Output: John Doe
console.log(age);   // Output: 30
console.log(city);  // Output: New York
console.log(zip);   // Output: 10001
