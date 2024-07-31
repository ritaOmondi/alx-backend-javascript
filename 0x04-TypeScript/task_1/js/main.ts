interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1: StudentClass = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: John
