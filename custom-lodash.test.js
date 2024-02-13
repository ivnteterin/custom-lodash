const _ = require('./custom-lodash');
const utils = require('./utils');
const vars = require('./vars');

// chunk
test('Array_CHUNK_1:\t Should return splited array into two chunks (arrays) with lengths of 2', () => {
  expect(_.chunk(vars.chunk_1, 2)).toEqual([
    ['a', 'b'],
    ['c', 'd'],
  ]);
});
test('Array_CHUNK_1:\t Array length should be 2', () => {
  expect(_.chunk(vars.chunk_1, 2).length).toBe(2);
});

test('Array_CHUNK_2:\t Should return splited array into two chunks (arrays) with lengths of 3 and 1', () => {
  expect(_.chunk(vars.chunk_1, 3)).toEqual([['a', 'b', 'c'], ['d']]);
});

test('Array_CHUNK_2:\t Array length should be 2', () => {
  expect(_.chunk(vars.chunk_1, 3).length).toBe(2);
});

// compact

test('Array_COMPACT:\t Should return an array with filtered out falsy values', () => {
  expect(_.compact(vars.compact_1)).toEqual([1, 2, 3]);
});

// drop

test('Array_DROP_1:\t Should return an array with 1 element removed from the beginning', () => {
  expect(_.drop(vars.drop_1)).toEqual([2, 3]);
});
test('Array_DROP_2:\t Should return an array with 2 elements removed from the beginning', () => {
  expect(_.drop(vars.drop_1, 2)).toEqual([3]);
});
test('Array_DROP_3:\t Should return an array with all elements removed from the beginning', () => {
  expect(_.drop(vars.drop_1, 5)).toEqual([]);
});
test('Array_DROP_4:\t Should return an array with no elements removed from the beginning', () => {
  expect(_.drop(vars.drop_1, 0)).toEqual([1, 2, 3]);
});

// dropWhile

test('Array_DROPWHILE_1:\t Should return an array with 2 first elements removed from the beginning', () => {
  expect(_.dropWhile(vars.dropWhile_1, (o) => !o.active)).toEqual([
    { user: 'pebbles', active: true },
  ]);
});

test('Array_DROPWHILE_2:\t Should return an array with no elements removed from the beginning', () => {
  expect(
    _.dropWhile(
      vars.dropWhile_1,
      utils.matches({ user: 'barney', active: false })
    )
  ).toEqual([
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]);
});

test('Array_DROPWHILE_3:\t Should return an array with no elements removed from the beginning', () => {
  expect(
    _.dropWhile(vars.dropWhile_1, utils.matchesProperty('active', false))
  ).toEqual([
    {
      user: 'pebbles',
      active: true,
    },
  ]);
});

test('Array_DROPWHILE_4:\t Should return an array with no elements', () => {
  expect(_.dropWhile(vars.dropWhile_1, utils.property('active'))).toEqual([]);
});

test('Array_TAKE_1:\t Should return an array with first element only', () => {
  expect(_.take(vars.dropWhile_2)).toEqual([1]);
});

test('Array_TAKE_2:\t Should return an array with first 2 elements only', () => {
  expect(_.take(vars.dropWhile_2, 2)).toEqual([1, 2]);
});
test('Array_TAKE_3:\t Should return an array with the same 3 elements', () => {
  expect(_.take(vars.dropWhile_2, 5)).toEqual([1, 2, 3]);
});
test('Array_TAKE_4:\t Should return an empty array', () => {
  expect(_.take(vars.dropWhile_2, 0)).toEqual([]);
});

test('Array_FILTER_1:\t Should return array with object for "fred"', () => {
  expect(
    _.filter(vars.filter_1, function (o) {
      return !o.active;
    })
  ).toEqual([{ user: 'fred', age: 40, active: false }]);
});

test('Array_FILTER_2:\t Should return array with object for "barney"', () => {
  expect(
    _.filter(vars.filter_1, utils.matches({ age: 36, active: true }))
  ).toEqual([{ user: 'barney', age: 36, active: true }]);
});

test('Array_FILTER_3:\t Should return array with object for "fred"', () => {
  expect(
    _.filter(vars.filter_1, utils.matchesProperty('active', false))
  ).toEqual([{ user: 'fred', age: 40, active: false }]);
});

test('Array_FILTER_4:\t Should return array with object for "barney, fred, pebbles"', () => {
  expect(_.filter(vars.filter_1, utils.property('active'))).toEqual([
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
  ]);
});

test('Array_FILTER_5:\t Should return array with number 3 only"', () => {
  expect(_.filter(vars.filter_2, (o) => o == 3)).toEqual([3]);
});

test('Array_FILTER_6:\t Should return array with number 3 and 7 only"', () => {
  expect(_.filter(vars.filter_2, (o) => [3, 7, 5].includes(o))).toEqual([3, 7]);
});

test('Array_FIND_1:\t Should return object for "barney"', () => {
  expect(
    _.find(vars.find_1, function (o) {
      return o.age < 40;
    })
  ).toEqual({ user: 'barney', age: 36, active: true });
});

test('Array_FIND_2:\t Should return object for "pebbles"', () => {
  expect(_.find(vars.find_1, utils.matches({ age: 1, active: true }))).toEqual({
    user: 'pebbles',
    age: 1,
    active: true,
  });
});

test('Array_FIND_3:\t Should return object for "fred"', () => {
  expect(_.find(vars.find_1, utils.matchesProperty('active', false))).toEqual({
    user: 'fred',
    age: 40,
    active: false,
  });
});

test('Array_FIND_4:\t Should return object for "barney"', () => {
  expect(_.find(vars.find_1, utils.property('active'))).toEqual({
    user: 'barney',
    age: 36,
    active: true,
  });
});

test('Array_FIND_5:\t Should return object for "pebbles"', () => {
  expect(
    _.find(
      vars.find_1,
      function (o) {
        return o.age < 40;
      },
      2
    )
  ).toEqual({ user: 'pebbles', age: 1, active: true });
});

test('Array_INCLUDES_1:\t Should return true', () => {
  expect(_.includes([1, 2, 3], 1)).toBe(true);
});

test('Array_INCLUDES_2:\t Should return false', () => {
  expect(_.includes([1, 2, 3], 1, 2)).toBe(false);
});
test('Array_INCLUDES_3:\t Should return true', () => {
  expect(_.includes({ a: 1, b: 2 }, 1)).toBe(true);
});
test('Array_INCLUDES_4:\t Should return true', () => {
  expect(_.includes('abcd', 'bc')).toBe(true);
});

test('Array_MAP_1:\t Should return an array with squared numbers', () => {
  expect(_.map([4, 8], vars.map_square)).toEqual([16, 64]);
});
test('Array_MAP_2:\t Should return an array with squared numbers', () => {
  expect(_.map({ a: 4, b: 8 }, vars.map_square)).toEqual([16, 64]);
});
test('Array_MAP_3:\t Should return an array with names of users', () => {
  expect(_.map(vars.map_1, 'user')).toEqual(['barney', 'fred']);
});

test('Array_ZIP_1:\t Should be an array of arrays with elements split by its index in each array', () => {
  expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([
    ['a', 1, true],
    ['b', 2, false],
  ]);
});

test('Array_ZIP_2:\t Should be an array of arrays with elements split by its index in each array (last array length = 2),', () => {
  expect(_.zip(['a', 'b'], [1], [true, false])).toEqual([
    ['a', 1, true],
    ['b', false],
  ]);
});

test('Object_MERGE_1:\t Should return the first object with added merged/keys', () => {
  expect(_.merge(vars.merge_1, vars.merge_2)).toEqual({
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  });
});

test('Object_MERGE_2:\t Should return the first object with added merged/keys', () => {
  expect(_.merge(vars.merge_3, vars.merge_4)).toEqual({
    a: [{ b: 2, d: 4, c: 3, e: 5 }],
  });
});

test('Object_MERGE_3:\t Should return the first object with added merged/keys', () => {
  expect(_.merge(vars.merge_5, vars.merge_6)).toEqual({
    a: { b: 2, d: 4, c: 3, e: 5 },
  });
});

test('Object_MERGE_4:\t Returned object should be the same as the first, but mutated.', () => {
  expect(_.merge(vars.merge_1, vars.merge_2)).toBe(vars.merge_1);
});

test('Object_OMIT_1:\t Should remove specified keys, properties', () => {
  expect(_.omit(vars.omit_1, ['a', 'c'])).toEqual({ b: '2' });
});

test('Object_OMIT_2:\t Should remove specified keys, properties', () => {
  expect(_.omit(vars.omit_2, ['a', 'c'])).toEqual({ b: '2', d: 4 });
});

test('Object_OMITBY_1:\t Should remove specified keys, properties based on second argument (function)', () => {
  expect(_.omitBy(vars.omit_1, (o) => vars.isNumber(o))).toEqual({
    b: '2',
  });
});

test('Object_PICK_1:\t Should return only specified keys', () => {
  expect(_.pick(vars.pick_1, ['a', 'c'])).toEqual({ a: 1, c: 3 });
});

test('Object_PICKBY_1:\t Should return only specified keys', () => {
  expect(_.pickBy(vars.pickBy_1, (o) => vars.isNumber(o))).toEqual({
    a: 1,
    c: 3,
  });
});

test('Object_TOPAIRS_1:\t Should return array with value pairs from object ([key,value])', () => {
  expect(_.toPairs(vars.toPairs_1)).toEqual([
    ['a', 1],
    ['b', '2'],
    ['c', 3],
  ]);
});
