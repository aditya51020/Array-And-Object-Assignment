// a) 
const student = {
    name: 'rahul',
    age: 20
};

Object.preventExtensions(student);

// b) 
const extensibleStatus = Object.isExtensible(student);

// c) 
const teacher = {
    subject: 'Math'
};

// d) 
Object.seal(teacher);

// e) 
const sealedStatus = Object.isSealed(teacher);

// f) 
console.log(extensibleStatus);  
console.log(sealedStatus);  