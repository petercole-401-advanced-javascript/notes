
class Validator {
// an object that tells us what another object should look like

  constructor(schema) {
    this.schema = schema;
  }

  isValid(data) {

    let valid = true;
//           action          schema from valid()
    for (let fieldName in this.schema) {
//        the obj inside action
      let field = this.schema[fieldName];

      // Am I required and set?
      let required = field.required
        ? this.isTruthy(data[fieldName])
        : true;

      // Am I the right type (if we even care)
      // data['action']
      let type = field.type
        ? this.isCorrectType(data[fieldName], field)
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }
    }
    return valid;
  }
  //            add, {type, required}
  isCorrectType(input, field) {
    switch (field.type) {
    case 'string': 
      return this.isString(input);
    case 'number':
      return this.isNumber(input);
    case 'array':
      return this.isArray(input, field.valueType);
    case 'object':
      return this.isObject(input);
    case 'boolean':
      return this.isBoolean(input);
    default: 
      return false;
    }
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }

  isArray(input, valueType) {
    return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'function';
  }

  isTruthy(input) {
    return !!input;
  }

}

module.exports = Validator;
