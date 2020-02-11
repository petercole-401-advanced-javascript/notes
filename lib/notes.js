'use strict';

const notes = {};

notes.fetch = function (opts) {
  if (opts) {
    console.log(`Note to Print: ${opts.body}`);
  }
}

module.exports = notes;
