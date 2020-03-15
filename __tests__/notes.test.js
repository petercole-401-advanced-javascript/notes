
const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(notes, 'add');

describe('Notes module', () => {
  // test for execute, don't execute if invalid
  it('execute(0 does nothing with invalid options', () => {
    notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  // test for add()
  it('notes() can add a note', () => {
    notes.execute({ action: 'add', payload: 'thing' })
      .then(() => {
        expect(notes.add).toHaveBeenCalled();
      });
  });
});
