//_________________5.0_________________
const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }
    get course() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.admissionYear;
    }
}

class Students {
    constructor(students) {
        this.students = students;
    }
    getInfo() {
        let sortedStudentData = this.students.sort((prev, next) => prev.course - next.course);
        return sortedStudentData.map(value => `${value.fullName} - ${value.courseName}, ${value.course} курс`)
    }
}
const arr = []
studentsData.forEach(item => {
    const student = new Student(item.firstName, item.lastName, item.admissionYear, item.courseName)
    arr.push(student)
})
const students = new Students(arr);
console.log(students.getInfo())