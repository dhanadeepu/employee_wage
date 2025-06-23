// Employee Payroll Application

class EmployeePayroll {
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
    this.workingHours = 0;
  }

  // Display welcome message
  static displayWelcomeMessage() {
    console.log("Welcome to the Employee Payroll Application");
  }

  // Randomly determine attendance and assign working hours
  markAttendance() {
    const attendanceType = Math.floor(Math.random() * 3);
    switch (attendanceType) {
      case 0:
        this.attendance = "Absent";
        this.workingHours = 0;
        break;
      case 1:
        this.attendance = "Present";
        this.workingHours = 8;
        break;
      case 2:
        this.attendance = "Half Day";
        this.workingHours = 4;
        break;
    }
  }

  // Calculate daily wage based on working hours
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    this.dailyWage = WAGE_PER_HOUR * this.workingHours;
  }

  // Display employee details
  displayDetails() {
    console.log(
      `ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}, ` +
        `Working Hours: ${this.workingHours}, Daily Wage: ₹${this.dailyWage}`
    );
  }
}

// Run Payroll Simulation
EmployeePayroll.displayWelcomeMessage();

const employees = [
  new EmployeePayroll(11, "Arjun"),
  new EmployeePayroll(41, "Ravi"),
  new EmployeePayroll(12, "Karthik"),
];

// Process each employee
employees.forEach((employee) => {
  employee.markAttendance();
  employee.calculateWage();
  employee.displayDetails();
});
