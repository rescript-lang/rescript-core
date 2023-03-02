include Intl__CollatorTest
include Intl__DateTimeFormatTest
include Intl__ListFormatTest
include Intl__LocaleTest
include Intl__NumberFormatTest
include Intl__PluralRulesTest
include Intl__RelativeTimeFormatTest
include Intl__SegmenterTest

open RescriptCore

Console.log("---")
Console.log("Intl")

Intl.getCanonicalLocalesExn("EN-US")->Console.log
Intl.getCanonicalLocalesManyExn(["EN-US", "Fr"])->Console.log

try {
  Intl.getCanonicalLocalesExn("bloop")->Console.log
} catch {
| Exn.Error(e) => Console.error(e)
}

try {
  Intl.supportedValuesOfExn("calendar")->Console.log
  Intl.supportedValuesOfExn("collation")->Console.log
  Intl.supportedValuesOfExn("currency")->Console.log
  Intl.supportedValuesOfExn("numberingSystem")->Console.log
  Intl.supportedValuesOfExn("timeZone")->Console.log
  Intl.supportedValuesOfExn("unit")->Console.log
} catch {
| Exn.Error(e) => Console.error(e)
}

try {
  Intl.supportedValuesOfExn("someInvalidKey")->ignore

  Console.error("Shouldn't have been hit")
} catch {
| Exn.Error(e) => Console.error(e)
// Expected output: RangeError: invalid key: "someInvalidKey"
}
