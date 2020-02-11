'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  this.command = this.getCommand(args.c);
  this.flag = this.getFlag(args.f);
  this.body = this.getBody(args.b);
}

Input.prototype.getCommand = function (command = '') {
  let validCommands = /notes/i;
  return validCommands.test(command) ? command : 'Command Error';
}

Input.prototype.getFlag = function (flag = '') {
  let validFlags = /a/i || argv._.includes('add');
  return validFlags ? flag : 'Missing flag';
}

Input.prototype.getBody =  function (body = undefined) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return body;
  }
}

Input.prototype.valid = function () {
  return rules[option].required ? !!this[option] : true;
};

const rules = {
  command: { required: true},
  flag: { required: true },
  body: {},
}

module.exports = Input;
