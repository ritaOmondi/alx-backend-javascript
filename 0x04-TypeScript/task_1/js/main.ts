interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'Jane',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  numberOfReports: 5,
};

console.log(printTeacher('John', 'Doe')); // Output: J. Doe
console.log(printTeacher('Jane', 'Smith')); // Output: J. Smith
console.log(teacher3);
console.log(director1);
