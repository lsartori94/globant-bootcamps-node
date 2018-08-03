const chai = require('chai');
const expect = chai.expect;

const asyncExampleFunction = require('../lib/async.js');

describe.only('AsyncTest', function()  {

  it('should return (You are lucky)', function() {
    asyncExampleFunction(true, testValue => expect(testValue).to.equal('You are lucky'));
  });

  it('should return (Oh! man)', function() {
    asyncExampleFunction(false, testValue => expect(testValue).to.equal('Oh! man'));
  });
});