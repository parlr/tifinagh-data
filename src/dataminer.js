export default {
  getLatin(datum) {
    return {
      codepoint: datum.codepoint,
      glyph: datum.glyph,
      ruby: datum.latin
    };
  },
  getAPI(datum) {
    return {
      codepoint: datum.codepoint,
      glyph: datum.glyph,
      ruby: datum.API
    };
  },
  getArabic(datum) {
    return {
      codepoint: datum.codepoint,
      glyph: datum.glyph,
      ruby: datum.arabic
    };
  }
};
