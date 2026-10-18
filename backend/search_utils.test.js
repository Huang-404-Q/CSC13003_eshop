const assert = require("node:assert/strict");
const test = require("node:test");

const { normalizeSearchQuery } = require("./search_utils");

test("trims leading and trailing whitespace from product searches", () => {
  assert.equal(normalizeSearchQuery("  iPhone  "), "iPhone");
});

test("treats missing and non-string search values as empty", () => {
  assert.equal(normalizeSearchQuery(undefined), "");
  assert.equal(normalizeSearchQuery(["iPhone"]), "");
});
