const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
  ]);
  
  function calculateDepartmentAverages(employees) {
    if (employees.size === 0) {
      return "Employees seti bo'sh.";
    }
    const departmentSalaries = {};
    employees.forEach(employee => {
      const { salary, department } = employee;
      departmentSalaries[department] = (departmentSalaries[department] || 0) + salary;
    });
    let highestAverage = 0;
    let highestDepartment = '';
    for (const department in departmentSalaries) {
      const average = departmentSalaries[department] / employees.size;
      if (average > highestAverage) {
        highestAverage = average;
        highestDepartment = department;
      }
    }
    return [{ department: highestDepartment, average: highestAverage }];
  }
  console.log(calculateDepartmentAverages(employees));
  