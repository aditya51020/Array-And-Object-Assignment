const student = {
    Name: "Alice",
    age:22,
    major: "CS",
    CPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(student) {
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
    }
}


displayStudentInfo(student);