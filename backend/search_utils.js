function normalizeSearchQuery(value) {
  return typeof value === "string" ? value.trim() : "";
}

module.exports = { normalizeSearchQuery };
