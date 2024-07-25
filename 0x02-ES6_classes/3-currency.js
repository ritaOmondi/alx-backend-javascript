export default class Currency {
  constructor(code, name) {
    this._verifyType('code', code, 'string');
    this._verifyType('name', name, 'string');

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._verifyType('code', value, 'string');
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._verifyType('name', value, 'string');
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  _verifyType(fieldName, value, expectedType) {
    if (typeof value !== expectedType) {
      throw new TypeError(`${fieldName} must be a ${expectedType}`);
    }
  }
}
