// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Core__Array from "./Core__Array.mjs";
import * as PervasivesU from "rescript/lib/es6/pervasivesU.js";

function equal(a, b) {
  return a === b;
}

function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function fromString(x, radix) {
  var maybeInt = radix !== undefined ? parseInt(x, radix) : parseInt(x);
  if (isNaN(maybeInt) || maybeInt > 2147483647 || maybeInt < -2147483648) {
    return ;
  } else {
    return maybeInt | 0;
  }
}

function range(start, end, optionsOpt) {
  var options = optionsOpt !== undefined ? optionsOpt : ({});
  var isInverted = start > end;
  var n = options.step;
  var step;
  if (n !== undefined) {
    if (n !== 0) {
      step = n;
    } else {
      if (start !== end) {
        throw new RangeError("Incorrect range arguments");
      }
      step = n;
    }
  } else {
    step = isInverted ? -1 : 1;
  }
  var length;
  if (isInverted === step >= 0) {
    length = 0;
  } else if (step === 0) {
    length = options.inclusive === true ? 1 : 0;
  } else {
    var range$1 = isInverted ? start - end | 0 : end - start | 0;
    var range$2 = options.inclusive === true ? range$1 + 1 | 0 : range$1;
    length = Math.ceil(range$2 / PervasivesU.abs(step)) | 0;
  }
  return Core__Array.fromInitializer(length, (function (i) {
                return start + Math.imul(i, step) | 0;
              }));
}

function rangeWithOptions(start, end, options) {
  return range(start, end, options);
}

function clamp(min, max, value) {
  var value$1 = max !== undefined && max < value ? max : value;
  if (min !== undefined && min > value$1) {
    return min;
  } else {
    return value$1;
  }
}

var Constants = {
  minValue: -2147483648,
  maxValue: 2147483647
};

export {
  Constants ,
  equal ,
  compare ,
  fromString ,
  range ,
  rangeWithOptions ,
  clamp ,
}
/* No side effect */
