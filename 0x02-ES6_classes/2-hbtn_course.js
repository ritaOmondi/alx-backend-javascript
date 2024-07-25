export default class HolbertonCourse {
  constructor(name, length, students) {
    this._verifyType('name', name, 'string');
    this._verifyType('length', length, 'number');
    this._verifyType('students', students, 'object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._verifyType('name', value, 'string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._verifyType('length', value, 'number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._verifyType('students', value, 'object');
    this._students = value;
  }

  _verifyType(fieldName, value, expectedType) {
    if (typeof value !== expectedType) {
      throw new TypeError(`${fieldName} must be a ${expectedType}`);
    }
  }
}
