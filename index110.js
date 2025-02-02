// Student Management System
class StudentManagement {
    constructor() {
        this.students = [];
    }

    // Add a new student
    addStudent(name, grades) {
        const student = {
            id: this.students.length + 1,
            name,
            grades, 
        };
        this.students.push(student);
        console.log(`Student "${name}" added with grades: [${grades.join(", ")}]`);
    }

    calculateAverageGrade(id) {
        const student = this.students.find((s) => s.id === id);
        if (!student) {
            console.log(`No student found with ID: ${id}`);
            return;
        }
        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        const average = total / student.grades.length;
        console.log(`Average grade for "${student.name}": ${average.toFixed(2)}`);
        return average;
    }

    // Display all students
    viewStudents() {
        if (this.students.length === 0) {
            console.log("No students in the system.");
            return;
        }
        console.log("List of Students:");
        this.students.forEach((student) => {
            console.log(
                `ID: ${student.id}, Name: ${student.name}, Grades: [${student.grades.join(", ")}]`
            );
        });
    }

    // Find top-performing student
    findTopStudent() {
        if (this.students.length === 0) {
            console.log("No students to evaluate.");
            return;
        }
        let topStudent = null;
        let highestAverage = 0;

        this.students.forEach((student) => {
            const total = student.grades.reduce((sum, grade) => sum + grade, 0);
            const average = total / student.grades.length;
            if (average > highestAverage) {
                highestAverage = average;
                topStudent = student;
            }
        });

        console.log(
            `Top-performing student: "${topStudent.name}" with an average grade of ${highestAverage.toFixed(
                2
            )}`
        );
    }
}


const studentManager = new StudentManagement();


studentManager.addStudent("Alice", [90, 85, 88]);
studentManager.addStudent("Bob", [78, 80, 79]);
studentManager.addStudent("Charlie", [92, 95, 96]);

// View all students
studentManager.viewStudents();
studentManager.calculateAverageGrade(1);
studentManager.findTopStudent();
studentManager.addStudent("David", [100, 98, 99]);
studentManager.findTopStudent();
