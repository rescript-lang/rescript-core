// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";

var eq = Caml_obj.equal;

Test.run([
      [
        "ObjectTests.res",
        8,
        13,
        50
      ],
      "assign copies from source to target"
    ], Object.assign({
          a: 1,
          b: 2
        }, {
          b: 3,
          c: 0
        }), eq, {
      a: 1,
      b: 3,
      c: 0
    });

function assignOverwritesTarget(title, source) {
  var sourceObj = {
    a: source
  };
  Test.run([
        [
          "ObjectTests.res",
          16,
          22,
          39
        ],
        "assign " + title + ""
      ], Object.assign({
            a: 1
          }, sourceObj), eq, sourceObj);
  Test.run([
        [
          "ObjectTests.res",
          17,
          22,
          39
        ],
        "assign " + title + ""
      ], Object.assign({
            a: undefined
          }, sourceObj), eq, sourceObj);
  Test.run([
        [
          "ObjectTests.res",
          18,
          22,
          39
        ],
        "assign " + title + ""
      ], Object.assign({
            a: null
          }, sourceObj), eq, sourceObj);
}

assignOverwritesTarget("when source is undefined", undefined);

assignOverwritesTarget("when source is null", null);

assignOverwritesTarget("when source is a number", 1);

assignOverwritesTarget("when source is a string", "abc");

export {
  eq ,
  assignOverwritesTarget ,
}
/*  Not a pure module */
