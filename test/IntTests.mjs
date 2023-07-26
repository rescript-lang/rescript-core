// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Curry from "rescript/lib/es6/curry.js";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Core__Int from "../src/Core__Int.mjs";
import * as Pervasives from "rescript/lib/es6/pervasives.js";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

var eq = Caml_obj.equal;

function $$catch(f) {
  try {
    Curry._1(f, undefined);
    return Pervasives.failwith("no exception raised");
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === Js_exn.$$Error) {
      return err._1;
    }
    throw err;
  }
}

Test.run([
      [
        "IntTests.res",
        13,
        20,
        50
      ],
      "range - positive, increasing"
    ], Core__Int.range(3, 6), eq, [
      3,
      4,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        14,
        20,
        50
      ],
      "range - negative, increasing"
    ], Core__Int.range(-3, -1), eq, [
      -3,
      -2
    ]);

Test.run([
      [
        "IntTests.res",
        15,
        20,
        51
      ],
      "range - cross-zero, incresing"
    ], Core__Int.range(-1, 2), eq, [
      -1,
      0,
      1
    ]);

Test.run([
      [
        "IntTests.res",
        16,
        20,
        42
      ],
      "range - start == end"
    ], Core__Int.range(3, 3), eq, []);

Test.run([
      [
        "IntTests.res",
        17,
        20,
        50
      ],
      "range - positive, decreasing"
    ], Core__Int.range(3, 1), eq, [
      3,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        18,
        20,
        50
      ],
      "range - negative, decreasing"
    ], Core__Int.range(-1, -3), eq, [
      -1,
      -2
    ]);

Test.run([
      [
        "IntTests.res",
        21,
        13,
        62
      ],
      "rangeWithOptions - positive, increasing, step 2"
    ], Core__Int.rangeWithOptions(3, 6, {
          step: 2
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        27,
        13,
        62
      ],
      "rangeWithOptions + positive, increasing, step 2"
    ], Core__Int.rangeWithOptions(3, 7, {
          step: 2
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        33,
        13,
        62
      ],
      "rangeWithOptions + positive, increasing, step 2"
    ], Core__Int.rangeWithOptions(3, 8, {
          step: 2
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        39,
        13,
        62
      ],
      "rangeWithOptions - negative, increasing, step 2"
    ], Core__Int.rangeWithOptions(-6, -3, {
          step: 2
        }), eq, [
      -6,
      -4
    ]);

Test.run([
      [
        "IntTests.res",
        45,
        13,
        62
      ],
      "rangeWithOptions - positive, increasing, step 0"
    ], $$catch(function (param) {
          return Core__Int.rangeWithOptions(3, 6, {
                      step: 0
                    });
        }), eq, new RangeError("Incorrect range arguments"));

Test.run([
      [
        "IntTests.res",
        51,
        13,
        54
      ],
      "rangeWithOptions - start == end, step 0"
    ], Core__Int.rangeWithOptions(3, 3, {
          step: 0
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        57,
        13,
        63
      ],
      "rangeWithOptions + positive, increasing, step -1"
    ], Core__Int.rangeWithOptions(3, 6, {
          step: -1
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        63,
        13,
        62
      ],
      "rangeWithOptions + positive, decreasing, step 1"
    ], Core__Int.rangeWithOptions(6, 3, {
          step: 1
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        69,
        13,
        63
      ],
      "rangeWithOptions + positive, decreasing, step -2"
    ], Core__Int.rangeWithOptions(6, 3, {
          step: -2
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        75,
        13,
        63
      ],
      "rangeWithOptions + positive, increasing, step -2"
    ], Core__Int.rangeWithOptions(6, 2, {
          step: -2
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        81,
        13,
        63
      ],
      "rangeWithOptions + positive, increasing, step -2"
    ], Core__Int.rangeWithOptions(6, 1, {
          step: -2
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        87,
        13,
        63
      ],
      "rangeWithOptions + negative, decreasing, step -2"
    ], Core__Int.rangeWithOptions(-3, -6, {
          step: -2
        }), eq, [
      -3,
      -5
    ]);

Test.run([
      [
        "IntTests.res",
        93,
        13,
        73
      ],
      "rangeWithOptions - positive, increasing, step 2, inclusive"
    ], Core__Int.rangeWithOptions(3, 6, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        99,
        13,
        73
      ],
      "rangeWithOptions + positive, increasing, step 2, inclusive"
    ], Core__Int.rangeWithOptions(3, 7, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        105,
        13,
        73
      ],
      "rangeWithOptions + positive, increasing, step 2, inclusive"
    ], Core__Int.rangeWithOptions(3, 8, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        111,
        13,
        73
      ],
      "rangeWithOptions - negative, increasing, step 2, inclusive"
    ], Core__Int.rangeWithOptions(-6, -3, {
          step: 2,
          inclusive: true
        }), eq, [
      -6,
      -4
    ]);

Test.run([
      [
        "IntTests.res",
        117,
        13,
        73
      ],
      "rangeWithOptions - positive, increasing, step 0, inclusive"
    ], $$catch(function (param) {
          return Core__Int.rangeWithOptions(3, 6, {
                      step: 0,
                      inclusive: true
                    });
        }), eq, new RangeError("Incorrect range arguments"));

Test.run([
      [
        "IntTests.res",
        123,
        13,
        65
      ],
      "rangeWithOptions - start == end, step 0, inclusive"
    ], Core__Int.rangeWithOptions(3, 3, {
          step: 0,
          inclusive: true
        }), eq, [3]);

Test.run([
      [
        "IntTests.res",
        129,
        13,
        74
      ],
      "rangeWithOptions + positive, increasing, step -1, inclusive"
    ], Core__Int.rangeWithOptions(3, 6, {
          step: -1,
          inclusive: true
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        135,
        13,
        73
      ],
      "rangeWithOptions + positive, decreasing, step 1, inclusive"
    ], Core__Int.rangeWithOptions(6, 3, {
          step: 1,
          inclusive: true
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        141,
        13,
        74
      ],
      "rangeWithOptions + positive, decreasing, step -2, inclusive"
    ], Core__Int.rangeWithOptions(6, 3, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        147,
        13,
        74
      ],
      "rangeWithOptions + positive, increasing, step -2, inclusive"
    ], Core__Int.rangeWithOptions(6, 2, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        153,
        13,
        74
      ],
      "rangeWithOptions + positive, increasing, step -2, inclusive"
    ], Core__Int.rangeWithOptions(6, 1, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        159,
        13,
        74
      ],
      "rangeWithOptions + negative, decreasing, step -2, inclusive"
    ], Core__Int.rangeWithOptions(-3, -6, {
          step: -2,
          inclusive: true
        }), eq, [
      -3,
      -5
    ]);

Test.run([
      [
        "IntTests.res",
        165,
        20,
        27
      ],
      "clamp"
    ], Core__Int.clamp(undefined, undefined, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        166,
        20,
        35
      ],
      "clamp - < min"
    ], Core__Int.clamp(50, undefined, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        167,
        20,
        35
      ],
      "clamp - > min"
    ], Core__Int.clamp(40, undefined, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        168,
        20,
        35
      ],
      "clamp - < max"
    ], Core__Int.clamp(undefined, 50, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        169,
        20,
        35
      ],
      "clamp - > max"
    ], Core__Int.clamp(undefined, 40, 42), eq, 40);

Test.run([
      [
        "IntTests.res",
        170,
        20,
        42
      ],
      "clamp - < min, < max"
    ], Core__Int.clamp(50, 60, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        171,
        20,
        42
      ],
      "clamp - < min, > max"
    ], Core__Int.clamp(50, 40, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        172,
        20,
        42
      ],
      "clamp - > min, < max"
    ], Core__Int.clamp(40, 60, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        173,
        20,
        42
      ],
      "clamp - > min, > max"
    ], Core__Int.clamp(40, 40, 42), eq, 40);

export {
  eq ,
  $$catch ,
}
/*  Not a pure module */
