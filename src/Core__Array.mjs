// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Js_math from "rescript/lib/es6/js_math.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function make(length, x) {
  if (length <= 0) {
    return [];
  }
  var arr = new Array(length);
  arr.fill(x);
  return arr;
}

function fromInitializer(length, f) {
  if (length <= 0) {
    return [];
  }
  var arr = new Array(length);
  for(var i = 0; i < length; ++i){
    arr[i] = Curry._1(f, i);
  }
  return arr;
}

function indexOfOpt(arr, item) {
  var index = arr.indexOf(item);
  if (index !== -1) {
    return index;
  }
  
}

function lastIndexOfOpt(arr, item) {
  var index = arr.lastIndexOf(item);
  if (index !== -1) {
    return index;
  }
  
}

function sort(arr, cmp) {
  var result = arr.slice();
  result.sort(cmp);
  return result;
}

function reduce(arr, init, f) {
  return arr.reduce(f, init);
}

function reduceWithIndex(arr, init, f) {
  return arr.reduce(f, init);
}

function reduceRight(arr, init, f) {
  return arr.reduceRight(f, init);
}

function reduceRightWithIndex(arr, init, f) {
  return arr.reduceRight(f, init);
}

function findIndexOpt(array, finder) {
  var index = array.findIndex(finder);
  if (index !== -1) {
    return index;
  }
  
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0; i < len; ++i){
    swapUnsafe(xs, i, Js_math.random_int(i, len));
  }
}

function shuffle(xs) {
  var result = xs.slice();
  shuffleInPlace(result);
  return result;
}

function filterMap(a, f) {
  var f$1 = Curry.__1(f);
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    var v$1 = f$1(v);
    if (v$1 !== undefined) {
      r[j] = Caml_option.valFromOption(v$1);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepSome(__x) {
  return filterMap(__x, (function (x) {
                return x;
              }));
}

function findMap(arr, f) {
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === arr.length) {
      return ;
    }
    var r = Curry._1(f, arr[i]);
    if (r !== undefined) {
      return r;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function findLastIndexOpt(xs, pred) {
  var inx = xs.findLastIndex(pred);
  if (inx !== -1) {
    return inx;
  }
  
}

function findLastIndexWithIndexOpt(xs, pred) {
  var inx = xs.findLastIndex(pred);
  if (inx !== -1) {
    return inx;
  }
  
}

function indexOfFromOpt(xs, val, fromInx) {
  var inx = xs.indexOf(val, fromInx);
  if (inx !== -1) {
    return inx;
  }
  
}

export {
  make ,
  fromInitializer ,
  sort ,
  indexOfOpt ,
  indexOfFromOpt ,
  lastIndexOfOpt ,
  reduce ,
  reduceWithIndex ,
  reduceRight ,
  reduceRightWithIndex ,
  findIndexOpt ,
  reverse ,
  filterMap ,
  keepSome ,
  shuffle ,
  shuffleInPlace ,
  findMap ,
  findLastIndexOpt ,
  findLastIndexWithIndexOpt ,
}
/* No side effect */
