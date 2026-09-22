console.log("=== HOISTING DEMONSTRATION ===");
console.log("Value of hoistedVar before declaration:", typeof hoistedVar !== "undefined" ? hoistedVar : undefined);
var hoistedVar = "var is hoisted";
console.log("Value of hoistedVar after assignment:", hoistedVar);

console.log("\n=== OPERATOR DEMONSTRATION ===");
console.log("Arithmetic (19 + 28 + 47):", 19 + 28 + 47);
console.log("Comparison (Percentage >= 50):", 94 >= 50);
console.log("Logical AND (CGPA >= 3.7 && Attendance >= 85):", 3.85 >= 3.7 && 92 >= 85);
let student = {
    name: "Hassan Bin Nisar",
    registrationNo: "242693",
    program: "BS Computer Science",
    semester: 5,
    cgpa: 3.85,
    attendance: 92,
    assignmentMarks: 19,
    midtermMarks: 28,
    finalExamMarks: 47
};

function render() {
    let totalMarks = student.assignmentMarks + student.midtermMarks + student.finalExamMarks;
    let percentage = (totalMarks / 100) * 100;

    let grade = "F";
    if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";

    let passFailStatus = percentage >= 50 ? "Passed" : "Failed";

    let scholarshipStatus = "Not Eligible";
    if (student.cgpa >= 3.7 && student.attendance >= 85 && percentage >= 85) {
        scholarshipStatus = "Gold Scholarship";
    } else if (student.cgpa >= 3.2 && student.attendance >= 75 && percentage >= 70) {
        scholarshipStatus = "Silver Scholarship";
    }

    let academicStatus = "Good Standing";
    if (student.cgpa < 2.0 || percentage < 50) {
        academicStatus = "Critical";
    } else if (student.cgpa < 2.5 || student.attendance < 75) {
        academicStatus = "Academic Warning";
    }

    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-reg").textContent = student.registrationNo;
    document.getElementById("student-program").textContent = student.program;
    document.getElementById("student-semester").textContent = student.semester;
    document.getElementById("student-cgpa").textContent = student.cgpa;
    document.getElementById("student-attendance").textContent = student.attendance;

    document.getElementById("marks-assignment").textContent = student.assignmentMarks;
    document.getElementById("marks-midterm").textContent = student.midtermMarks;
    document.getElementById("marks-final").textContent = student.finalExamMarks;
    document.getElementById("marks-total").textContent = totalMarks;
    document.getElementById("marks-percentage").textContent = percentage;
    document.getElementById("marks-grade").textContent = grade;
    document.getElementById("marks-status").textContent = passFailStatus;
    document.getElementById("scholarship-status").textContent = scholarshipStatus;
    document.getElementById("academic-status").textContent = academicStatus;
    document.getElementById("academic-status-badge").textContent = academicStatus;

    document.getElementById("report-output").textContent = 
        "Name: " + student.name + "\n" +
        "Marks: " + totalMarks + "/100 (" + percentage + "%)\n" +
        "Grade: " + grade + "\n" +
        "Status: " + academicStatus + "\n" +
        "Scholarship: " + scholarshipStatus;

    document.getElementById("hoistingOutput").innerHTML = 
        "<strong>var:</strong> Hoisted as undefined.<br><strong>let/const:</strong> Block scoped.";

    document.getElementById("operatorOutput").innerHTML = 
        "Total: " + totalMarks + " | Pass: " + (percentage >= 50) + " | Good Standing: " + (academicStatus === "Good Standing");
}

function loadScenario(type) {
    if (type === 1) {
        student = { name: "Hassan Bin Nisar", registrationNo: "242693", program: "BS Computer Science", semester: 5, cgpa: 3.85, attendance: 92, assignmentMarks: 19, midtermMarks: 28, finalExamMarks: 47 };
    } else if (type === 2) {
        student = { name: "Ali Ahmed", registrationNo: "242110", program: "BS Software Engineering", semester: 4, cgpa: 3.10, attendance: 82, assignmentMarks: 15, midtermMarks: 21, finalExamMarks: 36 };
    } else if (type === 3) {
        student = { name: "Sara Khan", registrationNo: "242315", program: "BS Information Technology", semester: 6, cgpa: 3.65, attendance: 68, assignmentMarks: 18, midtermMarks: 26, finalExamMarks: 44 };
    } else if (type === 4) {
        student = { name: "Usman Raza", registrationNo: "242990", program: "BS Computer Science", semester: 2, cgpa: 1.85, attendance: 55, assignmentMarks: 8, midtermMarks: 12, finalExamMarks: 22 };
    }
    render();
}

window.onload = render;