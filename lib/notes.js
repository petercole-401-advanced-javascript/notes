'use strict';

function Notes() {}
// two prototypes, one execute, and one add()

Notes.prototype.execute() = function (opts) {
  if (opts) {
    console.log(`Note to Print: ${opts.body}`);
  }
};

Notes.prototype.add() = function (opts) {
  
}

module.exports = notes;
