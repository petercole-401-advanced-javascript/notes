
const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes module', () => {
  // test for execute
  // don't execute if invalid
  it('execute() does nothing when options are invalid', () => {
    const thisCommandWillFail = { command: {'x': 'coconut'} };
    const notes = new Notes(thisCommandWillFail);
    notes.execute();
    expect(console.log).not.toHaveBeenCancelled;
  });

  // test for add()
  it('Notes.prototype.add() can add a note', () => {
    const action = 'add';
    const payload = 'this will succeed';
    const notes = new Notes({ command: { action: action, payload: payload } })
    // could be written as { command: { action, payload } }
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
  });
});
