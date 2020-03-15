
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
    this.inputSchema = new Schema({
      action: String,
      payload: String,
    });
  }
  execute() {
    switch (this.action) {
    case 'add': 
      this.add(this.payload);
      break;
    case 'list':
      this.list(this.payload);
      break;
    case 'delete':
      this.delete(this.payload);
      break;
    default: break;
    }
  } 
  add(payload) {
    console.log(`adding note: ${payload}`);
  }
}

module.exports = Notes;
