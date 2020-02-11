'use strict';

const Input = require('./lib/input.js');
const notes = require('./lib/notes.js');

const options = new Input();

options.valid() ? notes.fetch(options) : help(); 

function help() {
  console.log(`
  notes USAGE: notes -a <add> -x <error?>
        Body to send for printing
        Enclosed in single quotes
        JSON must be valid
  `);

  process.exit();
}
