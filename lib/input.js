
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
    //                                    ['a']
    let command = Object.keys(args).filter(arg => possibleArguments[arg])[0];//a
    // [0] is returning the first index, this may change later

    return {
      action: possibleArguments[command], //add
      payload: typeof args[command] === 'string' ? args[command] : undefined, //brackets for more values
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
// functions are always this
// varables, tho
// this: is it being defined by the constructor? this.x
//       is it being defined locally? x

module.exports = Input;
