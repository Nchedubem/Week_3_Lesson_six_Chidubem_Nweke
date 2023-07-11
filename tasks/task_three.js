// Create an object with multiple properties
myPerson = {
    name: "Ncheta Obioma",
    age: 25,
    occupation: "Software Engineer"
  };
  
  // Use a for...in loop to iterate over the object properties
  for (let key in person) {
    // Perform an action on each property
    console.log("Key:", key);
    console.log("Value:", person[key]);
  }