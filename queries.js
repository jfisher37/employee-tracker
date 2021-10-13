const db = require('./db/connections');

 //add a select all for departments and console.table it
const queries = { 
    allDepts: function () {
     db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  })
}


// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

    //add a select all for roles and console.table it

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

    //add a select all for employees and console.table it

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

    //Create an Insert into query

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

    //Create an Insert into query

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

    //Create an Insert into query

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

    //Create an update query

}   
module.exports = queries