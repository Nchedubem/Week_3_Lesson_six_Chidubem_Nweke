// Create multiple objects with different properties
let object1 = { name: "Chidubem Orakwelu" };
let object2 = { age: 29 };
let object3 = { occupation: "Software Engineer" };

// Merge the objects into a single object using Object.assign()
let mergedObject = Object.assign({}, object1, object2, object3);

// Log the merged object to the console
console.log(mergedObject);