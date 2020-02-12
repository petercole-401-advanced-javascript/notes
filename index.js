
// require files gonn use
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

// if valid input, do note stuff
//    else, help message

if (input.valid()) {
  notes.execute();
} else {
  help();
}

// help message
function help() {
  console.log('Help Message');
  process.exit();
}
