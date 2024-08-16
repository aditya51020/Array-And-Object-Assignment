const students = [
    {id:1, FristName: "aditya", LastName: "Rai", Grade: "A"},
    {id:2, FristName: "Gopal", LastName: "Raghav", Grade: "B"},
    {id:3, FristName: "Himanshu", LastName: "Pandey", Grade: "C"}
];

function addStudent(id, firstName, lastName, grade) {
    students.push({ id, FristName: firstName, LastName: lastName, Grade: grade });
}


addStudent(4, "Raj", "Sharma", "A");
console.log(students);

function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    } else {
        console.log("Student not found");
    }
}


updateStudent(2, { FristName: "Gopal", LastName: "Verma", Grade: "A" });
console.log(students);


function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
    } else {
        console.log("Student not found");
    }
}

deleteStudent(3);
console.log(students);

function listAllStudents() {
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.FristName} ${student.LastName}, Grade: ${student.Grade}`);
    });
}

listAllStudents();

function findStudentsByGrade(grade) {
    const studentsWithGrade = students.filter(student => student.Grade === grade);
    return studentsWithGrade;
}


const gradeAStudents = findStudentsByGrade("A");
console.log(gradeAStudents);

function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}


const avgAge = calculateAverageAge();
console.log(avgAge);




