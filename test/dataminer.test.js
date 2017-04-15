import fs from "fs";
import jsonfile from "jsonfile";
import test from "ava";

import dataminer from "../src/dataminer";

test("getLatin():", t => {
  const datum = { codepoint: "U+2D32", glyph: "ⴲ", latin: "bh" };

  const data = dataminer.getLatin(datum);
  t.deepEqual(data, { codepoint: "U+2D32", glyph: "ⴲ", ruby: "bh" });
});

test("getAPI():", t => {
  const datum = { codepoint: "U+2D32", glyph: "ⴲ", API: "ḇ" };

  const data = dataminer.getAPI(datum);
  t.deepEqual(data, { codepoint: "U+2D32", glyph: "ⴲ", ruby: "ḇ" });
});

test("getArabic():", t => {
  const datum = { codepoint: "U+2D32", glyph: "ⴲ", arabic: "ٻ" };

  const data = dataminer.getArabic(datum);
  t.deepEqual(data, { codepoint: "U+2D32", glyph: "ⴲ", ruby: "ٻ" });
});

test("save()", async t => {
  const data = [{ codepoint: "U+2D32", glyph: "ⴲ", ruby: "ٻ" }];

  const filepath = "./test/data.json";
  await dataminer.save(filepath, data);

  t.true(fs.statSync(filepath).size > 0);
  const content = jsonfile.readFileSync(filepath);
  t.is(content.length, 1);
});
