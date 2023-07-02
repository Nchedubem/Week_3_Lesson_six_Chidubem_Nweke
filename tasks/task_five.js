// Create multiple objects with different properties
var obj1 = { name: "Chidubem Orakwelu" };
var obj2 = { age: 29 };
var obj3 = { occupation: "Software Engineer" };

// Merge the objects into a single object using Object.assign()
var mergedObject = Object.assign({}, obj1, obj2, obj3);

// Log the merged object to the console
console.log(mergedObject);