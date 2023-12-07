// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Iterate through studentsList and append rows to the table
studentsList.forEach((student) => {
  const row = tableBody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the body of the HTML document
document.body.appendChild(table);

