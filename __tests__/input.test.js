
const Input = require('../lib/input.js');
const minimist = require('minimist');

jest.mock('minimist');

const minimist = require('minimist');

// mock the user's haing inputed "node index.js -a 'this is a note' "

minimist.mockImplementation((sda) => ({
  a: 'this is a note',
}));

describe('Input module', () => {
  // test the parseInput() functions
  it('parseInput() returns a properly formed object', () => {
    const options = new Input();

    const command = options.parseInput({ a: 'this should succeed' });

    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  });

  // test valid() functions

  it('valid() accepts a properly formed input', () => {
    const options = new Input();
    // delete options.command;
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects a improperly formed input', () => {
    let options = new Input();
    // minimist.mockImplementation(() => {
    //   return {};
    // });
    // send the input an actual object, but make that object be empty
    options.command = {};
    expect(options.valid()).toBeFalsy();
  });
});
