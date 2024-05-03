import inquirer from "inquirer";
class student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id;
        this.name = name;
        this.courseEnrolled = courseEnrolled;
        this.feesAmount = feesAmount;
    }
}
let basedId = 1000;
let studentId = "";
let continueEnrollment = true;
let students = [];
do {
    let Action = await inquirer.prompt([
        {
            type: "list",
            name: "ans",
            message: "please select an option\n",
            choices: ["Enroll a student", "show student status"],
        }
    ]);
    if (Action.ans === "Enroll a student") {
        let studentName = await inquirer.prompt([
            {
                type: "input",
                name: "ans",
                message: "please Enter your name:"
            }
        ]);
        let trimStudentName = (studentName.ans).trim().toLowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(trimStudentName) === false) {
            if (trimStudentName !== "") {
                basedId++;
                studentId = "STID" + basedId;
                console.log("\n\tyour account has been created");
                console.log(`welcom ,${trimStudentName}`);
                let course = await inquirer.prompt([
                    {
                        type: "list",
                        name: "ans",
                        message: "Please select a course",
                        choices: ["IT", "python", "js", "ts"],
                    }
                ]);
                let courseFess = 0;
                switch (course.ans) {
                    case "IT":
                        courseFess = 3000;
                        break;
                    case "python":
                        courseFess = 3500;
                        break;
                    case "js":
                        courseFess = 4000;
                        break;
                    case "ts":
                        courseFess = 4500;
                        break;
                }
                let courseConfirm = await inquirer.prompt([{
                        type: "confirm",
                        name: "ans",
                        message: "Do you want to enroll in this course"
                    }]);
                if (courseConfirm.ans === true) {
                    let Student = new student(studentId, trimStudentName, [course.ans], courseFess);
                    students.push(Student);
                    console.log("you have enrolled in this course");
                }
            }
            else {
                console.log("invalid Name");
            }
        }
        else {
            console.log("this name is al ready exit");
        }
    }
} while (true);
