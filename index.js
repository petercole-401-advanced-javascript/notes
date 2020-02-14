
// require files to use, set up mongoose connection
const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGOOSE_URI, connectionOptions);

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

// Check for valid note, otherwise send error
if (input.valid()){
  notes.execute(input.command).then(mongoose.disconnect).catch(err => console.error('oops'));
} else {
  help();
}

// Erro message
function help(){
  console.log('Error Message');
  process.exit();
}
