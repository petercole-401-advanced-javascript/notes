
const NotesModel = require('./notes-model.js');

class Notes {
  constructor() {}

  async execute(options) {
    switch (options.action) {
    case 'add':
      return this.add(options.payload, options.category);
    case 'list':
      return this.add(options.payload);
    case 'delete':
      return this.add(options.payload);
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    const newNote = new NotesModel({
      text: text,
      category: category,
    });
    const saved = await newNote.save();
    console.log('created new note:', newNote.text);
    return saved;
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id)
      .then(() => console.log('deleted note id', id));
    console.log('Deleted Note ID', id);
    return;
  }

  async list(category) {
    const query = category ? { category } : {};
    const foundNotes = await NotesModel.find(query);
    foundNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`\tCategory: ${note.category}\t ID: ${note.id}`);
      console.log('-------------------');
      console.log('');
    });
    return;
  }
}

module.exports = Notes;
