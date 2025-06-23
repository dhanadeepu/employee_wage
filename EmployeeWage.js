// Employee Payroll Application
class EmployeePayroll {
  // Constructor to initialize employee details
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
  }
 
  displayMessage() {
    console.log("Welcome to Employee Payroll Application");
  }
  // Method to mark attendance randomly
  markAttendance() {
    let isPresent = Math.floor(Math.random() * 2);
    this.attendance = isPresent ? "Present" : "Absent";
  }
  //UC2 - For calculating daily wage based on attendance
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    const WORKING_HOURS = 8;
    const dailyWage = WAGE_PER_HOUR * WORKING_HOURS;
    if(this.attendance === "Present") {
      this.dailyWage = dailyWage;
    } else {
      this.dailyWage = 0;
    }
  }
  // method to display employee details
  displayDetails() {
    console.log(
      `Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}, Daily Wage: ${this.dailyWage}`
    );
  }
}
const employeePayroll = new EmployeePayroll();
employeePayroll.displayMessage();
//create employee objects
let empDetails = [
  new EmployeePayroll(11, "Deepak"),
  new EmployeePayroll(41, "Surya"),
  new EmployeePayroll(12, "niranjan"),
];
// Mark attendance for each employee and display their details
empDetails.forEach((employee) => {
  employee.markAttendance();
  employee.calculateWage(); //UC2 Implementing calculateWage method
  employee.displayDetails();
});
 // EmployeePayroll.js

// Employee Payroll Application
class EmployeePayroll {
  /**
   * Initializes the employee details
   * @param {number} empId - Employee ID
   * @param {string} empName - Employee Name
   */
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
  }

  // Display welcome message
  static displayWelcomeMessage() {
    console.log("Welcome to the Employee Payroll Application");
  }

  // Marks attendance randomly (Present or Absent)
  markAttendance() {
    const isPresent = Math.random() < 0.5; // 50% chance
    this.attendance = isPresent ? "Present" : "Absent";
  }

  // UC2 - Calculate daily wage based on attendance
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    const WORKING_HOURS = 8;

    this.dailyWage = this.attendance === "Present"
      ? WAGE_PER_HOUR * WORKING_HOURS
      : 0;
  }

  // Displays employee details
  displayDetails() {
    console.log(
      `Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}, Daily Wage: ₹${this.dailyWage}`
    );
  }
}

// Run Payroll Process
(function runPayroll() {
  EmployeePayroll.displayWelcomeMessage();

  const employees = [
    new EmployeePayroll(11, "Deepak"),
    new EmployeePayroll(41, "Surya"),
    new EmployeePayroll(12, "Niranjan"),
  ];

  employees.forEach((employee) => {
    employee.markAttendance();
    employee.calculateWage(); // UC2: Calculate wage based on attendance
    employee.displayDetails();
  });
})();
