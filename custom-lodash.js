/* eslint-disable no-plusplus */
const _ = {
  chunk(array, chunkLength) {
    const arr = [];
    let index = 0;
    for (let i = 0; i < Math.ceil(array.length / chunkLength); i++) {
      arr[i] = [];
      while (arr[i].length < chunkLength) {
        arr[i] = [...arr[i], array[index]];
        index++;
        if (arr[i].length === chunkLength) break;
      }
    }
    return arr;
  },
  compact(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) arr = [...arr, array[i]];
    }
    return arr;
  },
  drop(array, sliceLength = 1) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      if (i >= sliceLength) arr = [...arr, array[i]];
    }
    return arr;
  },
  dropWhile(collection, fn) {
    let arr = [];
    for (item in collection) {
      const obj = collection[item];
      if (!fn(obj)) {
        arr = [...arr, obj];
      }
    }
    return arr;
  },
  take(array, n = 1) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr = [...arr, array[i]];
    }
    return arr;
  },
  filter(collection, fn) {
    let arr = [];
    for (item in collection) {
      const obj = collection[item];
      if (fn(obj)) {
        arr = [...arr, obj];
      }
    }
    return arr;
  },

  find(collection, fn, index = 0) {
    let el = null;
    let counter = 0;
    for (item in collection) {
      if (counter < index) {
        counter++;
      } else {
        const obj = collection[item];
        if (fn(obj)) {
          el = obj;
          break;
        }
      }
    }
    return el;
  },
  includes(collection, value, index) {
    let included = false;
    let counter = 0;
    for (item in collection) {
      if (counter < index) {
        counter++;
      } else {
        if (typeof value !== 'string') {
          if (collection[item] === value) included = true;
        } else {
          for (let i = 0; i < collection.length; i++) {
            let newStr = '';
            for (let j = 0; j < value.length; j++) {
              newStr += collection.charAt(i + j);
            }
            if (newStr === value) included = true;
          }
        }
      }
      return included;
    }
  },
  map(col, iteratee) {
    let arr = [];
    if (typeof iteratee === 'function') {
      for (key in col) {
        arr = [...arr, iteratee(col[key])];
      }
    } else {
      for (key in col) {
        for (prop in col[key]) {
          if (prop === iteratee) arr = [...arr, col[key][prop]];
        }
      }
    }
    return arr;
  },
  zip(...arrays) {
    let arr = [];
    for (let i = 0; i < arrays.length; i++) {
      let innerArr = [];
      for (n in arrays) {
        if (arrays[n][i] != null) innerArr = [...innerArr, arrays[n][i]];
      }
      if (innerArr.length > 0) arr = [...arr, innerArr];
    }
    return arr;
  },

  merge(destination, fn) {
    let obj = {};
    // for (dKey in destination) {
    for (sKey in fn) {
      if (destination[sKey]) {
        this.merge(destination[sKey], fn[sKey]);
      } else {
        destination[sKey] = fn[sKey];
      }
    }
    return destination;
  },
  omit(object, toOmit) {
    const newObj = {};
    for (key in object) {
      let exists = false;
      for (item in toOmit) {
        if (toOmit[item] === key) {
          exists = true;
        }
      }
      if (!exists) newObj[key] = object[key];
    }
    return newObj;
  },
  omitBy(object, fn) {
    const newObj = {};
    for (key in object) {
      if (!fn(object[key])) {
        newObj[key] = object[key];
      }
    }
    return newObj;
  },
  pick(object, paths) {
    const newObj = {};
    for (key of paths) {
      if (typeof object[key] !== 'undefined') newObj[key] = object[key];
    }
    return newObj;
  },
  pickBy(object, fn) {
    const newObj = {};
    for (key in object) {
      if (fn(object[key])) newObj[key] = object[key];
    }
    return newObj;
  },
  toPairs(object) {
    let arr = [];
    for (key in object) {
      arr = [...arr, [key, object[key]]];
    }
    return arr;
  },
};

module.exports = _;
