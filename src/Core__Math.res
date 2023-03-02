module Constants = {
  @val external e: float = "Math.E"
  @val external ln2: float = "Math.LN2"
  @val external ln10: float = "Math.LN10"
  @val external log2e: float = "Math.LOG2E"
  @val external log10e: float = "Math.LOG10E"
  @val external pi: float = "Math.PI"
  @val external sqrt1_2: float = "Math.SQRT1_2"
  @val external sqrt2: float = "Math.SQRT2"
}

module Int = {
  @val external abs: int => int = "Math.abs"
  @val external clz32: int => int = "Math.clz32"
  @val external imul: (int, int) => int = "Math.imul"
  @val external min: (int, int) => int = "Math.min"
  @variadic @val external _minMany: array<int> => int = "Math.min"
  let minMany = arr =>
    switch arr {
    | [] => 0
    | arr => _minMany(arr)
    }
  @val external max: (int, int) => int = "Math.max"
  @variadic @val external _maxMany: array<int> => int = "Math.max"
  let maxMany = arr =>
    switch arr {
    | [] => 0
    | arr => _maxMany(arr)
    }
  @val external pow: (int, ~exp: int) => int = "Math.pow"
  @val external sign: int => int = "Math.sign"
}

@val external abs: float => float = "Math.abs"
@val external acos: float => float = "Math.acos"
@val external acosh: float => float = "Math.acosh"
@val external asin: float => float = "Math.asin"
@val external asinh: float => float = "Math.asinh"
@val external atan: float => float = "Math.atan"
@val external atanh: float => float = "Math.atanh"
@val external atan2: (~x: float, ~y: float) => float = "Math.atan2"
@val external cbrt: float => float = "Math.cbrt"
@val external ceil: float => float = "Math.ceil"
@val external cos: float => float = "Math.cos"
@val external cosh: float => float = "Math.cosh"
@val external exp: float => float = "Math.exp"
@val external expm1: float => float = "Math.expm1"
@val external floor: float => float = "Math.floor"
@val external fround: float => float = "Math.fround"
@val external hypot: (float, float) => float = "Math.hypot"
@variadic @val external hypotMany: array<float> => float = "Math.hypot"
@val external log: float => float = "Math.log"
@val external log1p: float => float = "Math.log1p"
@val external log10: float => float = "Math.log10"
@val external log2: float => float = "Math.log2"
@val external min: (float, float) => float = "Math.min"
@variadic @val external _minMany: array<float> => float = "Math.min"
let minMany = arr =>
    switch arr {
    | [] => 0.0
    | arr => _minMany(arr)
    }
@val external max: (float, float) => float = "Math.max"
@variadic @val external _maxMany: array<float> => float = "Math.max"
let maxMany = arr =>
    switch arr {
    | [] => 0.0
    | arr => _maxMany(arr)
    }
@val external pow: (float, ~exp: float) => float = "Math.pow"
@val external random: unit => float = "Math.random"
@val external round: float => float = "Math.round"
@val external sign: float => float = "Math.sign"
@val external sin: float => float = "Math.sin"
@val external sinh: float => float = "Math.sinh"
@val external sqrt: float => float = "Math.sqrt"
@val external tan: float => float = "Math.tan"
@val external tanh: float => float = "Math.tanh"
@val external trunc: float => float = "Math.trunc"
