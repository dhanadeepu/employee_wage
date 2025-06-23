// Employee Payroll Application

class EmployeePayroll {
  /**
   * Constructor to initialize employee details.
   * @param {number} empId - Unique ID for the employee.
   * @param {string} empName - Name of the employee.
   */
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
  }

  /**
   * Static method to display a welcome message.
   */
  static displayWelcomeMessage() {
    console.log("Welcome to the Employee Payroll Application\n");
  }

  /**
   * Method to randomly mark attendance as 'Present' or 'Absent'.
   */
  markAttendance() {
    const isPresent = Math.random() < 0.5; // 50% chance
    this.attendance = isPresent ? "Present" : "Absent";
  }

  /**
   * Method to display the employee's details.
   */
  displayDetails() {
    console.log(
      `Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}`
    );
  }
}

// Entry point
(function main() {
  // Display welcome message
  EmployeePayroll.displayWelcomeMessage();

  // Initialize employee records
  const employees = [
    new EmployeePayroll(11, "Deepak"),
    new EmployeePayroll(41, "Surya"),
    new EmployeePayroll(12, "Niranjan"),
  ];

  // Process each employee
  employees.forEach((employee) => {
    employee.markAttendance();
    employee.displayDetails();
  });
})();
