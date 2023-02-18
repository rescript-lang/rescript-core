// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as Js_math from "rescript/lib/es6/js_math.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Caml_splice_call from "rescript/lib/es6/caml_splice_call.js";

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

function reduce(a, x, f) {
  var f$1 = Curry.__2(f);
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f$1(r, a[i]);
  }
  return r;
}

function reduceWithIndex(a, x, f) {
  var f$1 = Curry.__3(f);
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f$1(r, a[i], i);
  }
  return r;
}

function reduceReverse(a, x, f) {
  var f$1 = Curry.__2(f);
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f$1(r, a[i]);
  }
  return r;
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

function flatMap(a, f) {
  return Caml_splice_call.spliceObjApply([], "concat", [a.map(f)]);
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

export {
  sort ,
  indexOfOpt ,
  lastIndexOfOpt ,
  reduce ,
  reduceReverse ,
  reduceWithIndex ,
  findIndexOpt ,
  reverse ,
  filterMap ,
  shuffle ,
  shuffleInPlace ,
  flatMap ,
  findMap ,
}
/* No side effect */
