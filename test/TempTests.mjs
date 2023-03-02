// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Core__Int from "../src/Core__Int.mjs";
import * as IntlTests from "./Intl/IntlTests.mjs";
import * as Core__Dict from "../src/Core__Dict.mjs";
import * as Core__JSON from "../src/Core__JSON.mjs";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Core__Array from "../src/Core__Array.mjs";
import * as Core__Float from "../src/Core__Float.mjs";
import * as Core__BigInt from "../src/Core__BigInt.mjs";
import * as Core__Option from "../src/Core__Option.mjs";

console.info("");

console.info("Array");

console.info("---");

var array = [
  1,
  2,
  3,
  4
];

console.info(Core__Array.reduce(array.map(function (x) {
              return (x << 1);
            }), 0, (function (a, b) {
            return a + b | 0;
          })));

console.info(typeof array);

console.info("");

console.info("Date");

console.info("---");

var date = new Date(Date.UTC(2020, 11));

console.log(date.toUTCString());

console.info("");

console.info("Dict");

console.info("---");

var dict = {};

dict["foo"] = "bar";

var dict2 = Object.assign({}, dict);

Core__Dict.$$delete(dict2, "foo");

console.log(dict, dict2);

console.info("");

console.info("Error");

console.info("---");

function f() {
  var error = new Error("hello");
  var typeError = new TypeError("error");
  var g = function () {
    throw error;
  };
  var h = function () {
    throw typeError;
  };
  return [
          g,
          h
        ];
}

console.info("");

console.info("Float/Int");

console.info("---");

console.log((10.2).toFixed(2));

console.log((10).toFixed(2));

console.log(Core__Int.fromString(undefined, "0"));

console.log(Core__Float.fromString("0.1"));

console.info("");

console.info("JSON");

console.info("---");

var json = JSON.parse("{\"foo\": \"bar\"}");

var json$1 = Core__JSON.Classify.classify(json);

var tmp;

if (typeof json$1 !== "object" || json$1.TAG !== "Object") {
  tmp = undefined;
} else {
  var value = Core__JSON.Classify.classify(json$1._0["foo"]);
  tmp = typeof value !== "object" || value.TAG !== "String" ? undefined : value._0;
}

console.log(tmp);

console.info("");

console.info("Map");

console.info("---");

var map = new Map();

map.set(1, 1);

map.set(2, 2);

map.delete(1);

console.log(map);

console.info("");

console.info("Math");

console.info("---");

console.log(Math.ceil(Math.PI / 2.0));

console.info("");

console.info("BigInt");

console.info("---");

console.log(BigInt(1) / BigInt(12.0));

console.info("");

console.info("Object");

console.info("---");

var myObject = {
  foo: "bar"
};

console.log(Object.create(myObject));

console.log(Object.create(myObject, {
          foo: {
            value: "bar"
          }
        }));

console.log(Object.create(null));

console.log(Object.create(null, {
          foo: {
            value: "bar"
          }
        }));

var copy = Object.assign({}, myObject);

var withNewProp = Object.assign(copy, {
      bar: "baz"
    });

console.info("");

console.info("Promise");

console.info("---");

var promise = new Promise((function (resolve, _reject) {
        setTimeout((function () {
                resolve(1);
              }), 100);
      }));

promise.then(function (x) {
            return Promise.resolve(x + 1 | 0);
          }).then(function (x) {
          return Promise.resolve(x + 2 | 0);
        }).then(function (x) {
        console.log(x);
        return Promise.resolve();
      }).finally(function () {
      console.log("Promise finally");
    });

console.info("");

console.info("RegExp");

console.info("---");

var regex = new RegExp("hello(\\w+)");

var string = "helloworld";

console.log(regex.test(string));

var result = regex.exec(string);

var result$1 = (result == null) ? undefined : Caml_option.some(result);

console.log(Core__Option.map(result$1, (function (prim) {
            return prim.input;
          })));

console.log(Core__Option.map(result$1, (function (prim) {
            return prim.index;
          })));

console.log(Core__Option.map(result$1, (function (prim) {
            return prim.slice(1);
          })));

console.info("");

console.info("Set");

console.info("---");

var set = new Set();

set.add(1);

set.add(2);

set.delete(2);

console.log(set);

console.info("");

console.info("String");

console.info("---");

var regexp = new RegExp("(hello )(world)");

console.log("   Hello world  ".toLowerCase().trim().replace(regexp, (function (param, group1, group2, param$1, param$2) {
            return group1 + group2.toUpperCase();
          })));

console.info("");

console.info("Symbol");

console.info("---");

var x = Symbol.for("Foo");

console.log(x);

var array$1 = Array.from("foo"[Symbol.iterator]());

console.log(array$1);

console.info("");

console.info("Global namespace");

console.info("---");

console.log("number");

var timeout = setTimeout((function () {
        console.log("Hello!");
      }), 100);

clearTimeout(timeout);

if (globalThis.hello !== undefined) {
  console.log(globalThis.hello.bar);
  console.log("hello");
}

var z = 1.2 % 1.4;

var intFromBigInt = Core__BigInt.toInt(BigInt("10000000000"));

console.log({
      bar: "1"
    });

var Bugfix = {};

console.log(Core__Int.fromString(undefined, "1231231"));

console.log(Core__Int.fromString(undefined, "12.22"));

console.log(Core__Int.fromString(undefined, "99999999999999999"));

console.log(Core__Int.fromString(undefined, "99999999999999999"));

console.log(Core__Int.fromString(2, "010101"));

var collator = IntlTests.collator;

var resolvedOptions = IntlTests.resolvedOptions;

var timeZone = IntlTests.timeZone;

var locale = IntlTests.locale;

var currencyFormatter = IntlTests.currencyFormatter;

var roundingFormatter = IntlTests.roundingFormatter;

var groupingFormatter1 = IntlTests.groupingFormatter1;

var groupingFormatter2 = IntlTests.groupingFormatter2;

var sigFormatter = IntlTests.sigFormatter;

var formatter = IntlTests.formatter;

var segments = IntlTests.segments;

export {
  collator ,
  resolvedOptions ,
  timeZone ,
  locale ,
  currencyFormatter ,
  roundingFormatter ,
  groupingFormatter1 ,
  groupingFormatter2 ,
  sigFormatter ,
  formatter ,
  segments ,
  date ,
  dict ,
  dict2 ,
  f ,
  json ,
  map ,
  myObject ,
  copy ,
  withNewProp ,
  promise ,
  regex ,
  string ,
  result$1 as result,
  set ,
  regexp ,
  x ,
  array$1 as array,
  timeout ,
  z ,
  intFromBigInt ,
  Bugfix ,
}
/*  Not a pure module */
