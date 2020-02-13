
const minimist = require('minimist');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const possibleArguments = {
  a: 'add',
  add: 'add',
  l: 'list',
  list: 'list',
  d: 'delete',
  delete: 'delete',
};

class Input {
  constructor() {
    let args = minimist(process.argv.slice(2)); // { a: 'hello' }
    this.command = this.parseInput(args);
    this.inputSchema = new Schema({
      action: String,
      payload: String,
    });

  }
  parseInput(args) {
    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
    };
  }
  // schema here, > validator, check for correct types
  valid() {
    const { action, payload } = this.command;
    if (action && payload) {
      if (possibleArguments.hasOwnProperty(action) && typeof payload === 'string') {
        return true;
      }
    }
    return false;
  }
}

module.exports = Input;
