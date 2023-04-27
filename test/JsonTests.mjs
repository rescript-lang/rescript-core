// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";

function decodeJsonTest(param) {
  var json = {"someProp":{"otherProp": null, "thirdProp": [true, false]}};
  var decodedCorrectly;
  if (!Array.isArray(json) && (json === null || typeof json !== "object") && typeof json !== "number" && typeof json !== "string" || !(typeof json === "object" && !Array.isArray(json))) {
    decodedCorrectly = false;
  } else {
    var match = json["someProp"];
    if (match !== undefined && !(!Array.isArray(match) && (match === null || typeof match !== "object") && typeof match !== "number" && typeof match !== "string" || !(typeof match === "object" && !Array.isArray(match)))) {
      var match$1 = match["thirdProp"];
      if (match$1 !== undefined && !(!Array.isArray(match$1) && (match$1 === null || typeof match$1 !== "object") && typeof match$1 !== "number" && typeof match$1 !== "string" || !(Array.isArray(match$1) && match$1.length === 2))) {
        var match$2 = match$1[0];
        if (!Array.isArray(match$2) && (match$2 === null || typeof match$2 !== "object") && typeof match$2 !== "number" && typeof match$2 !== "string" && match$2 === true) {
          var match$3 = match$1[1];
          decodedCorrectly = !Array.isArray(match$3) && (match$3 === null || typeof match$3 !== "object") && typeof match$3 !== "number" && typeof match$3 !== "string" && match$3 === false ? true : false;
        } else {
          decodedCorrectly = false;
        }
      } else {
        decodedCorrectly = false;
      }
    } else {
      decodedCorrectly = false;
    }
  }
  Test.run([
        [
          "JsonTests.res",
          19,
          22,
          55
        ],
        "Should decode JSON successfully"
      ], decodedCorrectly, (function (prim0, prim1) {
          return prim0 === prim1;
        }), true);
}

decodeJsonTest(undefined);

export {
  decodeJsonTest ,
}
/*  Not a pure module */
