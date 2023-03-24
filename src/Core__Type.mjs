// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Caml_option from "rescript/lib/es6/caml_option.js";

function toObjectUnsafe(i) {
  return i;
}

function toBoolUnsafe(i) {
  return i;
}

function toFloatUnsafe(i) {
  return i;
}

function toBigIntUnsafe(i) {
  return i;
}

function toStringUnsafe(i) {
  return i;
}

function toSymbolUnsafe(i) {
  return i;
}

function toFunctionUnsafe(i) {
  return i;
}

var isNull = (function(a) { return (a===null); });

var isNullOrUndefined = (function(a) { return (a===null || a===undefined); });

var isUndefined = (function(a) { return (a===undefined); });

function classify(value) {
  var match = typeof value;
  if (match === "symbol") {
    return {
            TAG: /* Symbol */5,
            _0: value
          };
  } else if (match === "boolean") {
    return {
            TAG: /* Bool */1,
            _0: value
          };
  } else if (match === "string") {
    return {
            TAG: /* String */4,
            _0: value
          };
  } else if (match === "function") {
    return {
            TAG: /* Function */6,
            _0: value
          };
  } else if (match === "object") {
    if (isNull(value)) {
      return /* Null */1;
    } else {
      return {
              TAG: /* Object */0,
              _0: value
            };
    }
  } else if (match === "undefined") {
    return /* Undefined */0;
  } else if (match === "number") {
    return {
            TAG: /* Number */2,
            _0: value
          };
  } else {
    return {
            TAG: /* BigInt */3,
            _0: value
          };
  }
}

function toObject(i) {
  if (typeof i === "object") {
    return Caml_option.some(i);
  }
  
}

function toBool(i) {
  if (typeof i === "boolean") {
    return Caml_option.some(i);
  }
  
}

function toFloat(i) {
  if (typeof i === "number") {
    return Caml_option.some(i);
  }
  
}

function toBigInt(i) {
  if (typeof i === "bigint") {
    return Caml_option.some(i);
  }
  
}

function toString(i) {
  if (typeof i === "string") {
    return Caml_option.some(i);
  }
  
}

function toSymbol(i) {
  if (typeof i === "symbol") {
    return Caml_option.some(i);
  }
  
}

function toFunction(i) {
  if (typeof i === "function") {
    return Caml_option.some(i);
  }
  
}

function get(item, name) {
  if (isNullOrUndefined(item)) {
    return ;
  } else {
    return item[name];
  }
}

function getBySymbol(item, sym) {
  if (isNullOrUndefined(item)) {
    return ;
  } else {
    return item[sym];
  }
}

export {
  classify ,
  isUndefined ,
  isNull ,
  isNullOrUndefined ,
  toObject ,
  toBool ,
  toFloat ,
  toBigInt ,
  toString ,
  toSymbol ,
  toFunction ,
  toObjectUnsafe ,
  toBoolUnsafe ,
  toFloatUnsafe ,
  toBigIntUnsafe ,
  toStringUnsafe ,
  toSymbolUnsafe ,
  toFunctionUnsafe ,
  get ,
  getBySymbol ,
}
/* No side effect */
