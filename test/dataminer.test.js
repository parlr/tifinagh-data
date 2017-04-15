import test from "ava";
import dataminer from "../src/dataminer";

test("getLatin():", t => {
  const datum = {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    latin: "bh"
  };

  const data = dataminer.getLatin(datum);
  t.deepEqual(data, {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    ruby: "bh"
  });
});

test("getAPI():", t => {
  const datum = {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    API: "ḇ"
  };

  const data = dataminer.getAPI(datum);
  t.deepEqual(data, {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    ruby: "ḇ"
  });
});

test("getArabic():", t => {
  const datum = {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    arabic: "ٻ"
  };

  const data = dataminer.getArabic(datum);
  t.deepEqual(data, {
    codepoint: "U+2D32",
    glyph: "ⴲ",
    ruby: "ٻ"
  });
});
