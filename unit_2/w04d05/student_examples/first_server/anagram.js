function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }
  function cleanString(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  module.exports = anagrams;

  // We must use Export function here to run it