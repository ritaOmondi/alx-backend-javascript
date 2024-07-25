import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._verifyType('amount', amount, 'number');
    this._verifyType('currency', currency, Currency);

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._verifyType('amount', value, 'number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._verifyType('currency', value, Currency);
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    this._verifyType('amount', amount, 'number');
    this._verifyType('conversionRate', conversionRate, 'number');

    return amount * conversionRate;
  }

  _verifyType(fieldName, value, expectedType) {
    if (typeof expectedType === 'function' && !(value instanceof expectedType)) {
      throw new TypeError(`${fieldName} must be an instance of ${expectedType.name}`);
    } else if (typeof value !== typeof expectedType) {
      throw new TypeError(`${fieldName} must be a ${typeof expectedType}`);
    }
  }
}
