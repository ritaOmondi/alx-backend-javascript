import { Subjects } from './subjects/Cpp';
import { Subjects } from './subjects/Java';
import { Subjects } from './subjects/React';

// Create and export constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create and export a Teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
