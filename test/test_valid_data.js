const chai = require('chai');
const expect = chai.expect;

const { isValidData } = require('./path'); //path

describe('data valid test', function () {
  it('return true，when data valid', function () {

    const validData = /* valid data type*/;
    const result = isValidData(validData);
    expect(result).to.equal(true);
  });

  it('return false', function () {

    const invalidData = /* invalid data type */;
    const result = isValidData(invalidData);
    expect(result).to.equal(false);
  });
});