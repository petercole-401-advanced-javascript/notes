
const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2)); // { a: 'hello' }
    this.command = this.parse(args);
  }

  parse(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };

    let command = Object.keys(args).filter(arg => possibleArguments[arg])[0];

    return {
      action: possibleArguments[command],
      payload: typeof args[command] === 'string' ? args[command] : undefined,
      category: args.category || args.c,
    };
  }

  valid() {
    let schema = {
      action: { type: 'string' , required: true },
    };
    let validator = new Validator(schema);
    return validator.isValid(this.command);
  }
}

module.exports = Input;
