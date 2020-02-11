'use strict';

const minimist = require('minimist');

const rules = {
  flag: { required: true },
  command: { required: true },
};

function Input() {
  const args = minimist(process.argv.slice(2));
  this.command = this.parse(args);
}

Input.prototype.getFlag = function (flag = '') {
  let validFlags = minimist(process.argv.slice(2)).includes(('a' || 'add') && 'notes');
  return validFlags ? flag : undefined;
};

Input.prototype.valid = function () {
  return rules.required ? !!this : true;
};

module.exports = Input;
