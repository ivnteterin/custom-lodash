const matchesProperty = (path, srcValue) => {
  return (obj) => {
    let isMatching = false;
    if (obj[path] === srcValue) {
      isMatching = true;
    }
    return isMatching;
  };
};

const matches = (source) => {
  return (obj) => {
    let isMatching = false;
    for (item in source) {
      if (typeof obj[item] !== 'undefined' && obj[item] == source[item]) {
        isMatching = true;
      } else {
        isMatching = false;
        break;
      }
    }

    return isMatching;
  };
};

const property = (path) => {
  return (obj) => {
    let isMatching = false;
    if (obj[path] || obj[path] === false) {
      isMatching = true;
    }
    return isMatching;
  };
};

exports.matches = matches;
exports.matchesProperty = matchesProperty;
exports.property = property;
