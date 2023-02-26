const chunk_1 = ['a', 'b', 'c', 'd'];

const compact_1 = [0, 1, false, 2, '', 3];

const drop_1 = [1, 2, 3];

const dropWhile_1 = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

const dropWhile_2 = [1, 2, 3];

const filter_1 = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

const filter_2 = [1, 2, 3, 4, 6, 7];

const find_1 = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

function map_square(n) {
  return n * n;
}

const map_1 = [{ user: 'barney' }, { user: 'fred' }];

const merge_1 = {
  a: [{ b: 2 }, { d: 4 }],
};
const merge_2 = {
  a: [{ c: 3 }, { e: 5 }],
};

const merge_3 = {
  a: [{ b: 2, d: 4 }],
};
const merge_4 = {
  a: [{ c: 3, e: 5 }],
};

const merge_5 = {
  a: { b: 2, d: 4 },
};
const merge_6 = {
  a: { c: 3, e: 5 },
};

const isNumber = (o) => typeof o === 'number';

const omit_1 = { a: 1, b: '2', c: 3 };
const omit_2 = { a: 1, b: '2', c: 3, d: 4 };
const pick_1 = { a: 1, b: '2', c: 3 };
const pickBy_1 = { a: 1, b: '2', c: 3 };
const toPairs_1 = { a: 1, b: '2', c: 3 };

exports.chunk_1 = chunk_1;
exports.compact_1 = compact_1;
exports.drop_1 = drop_1;
exports.dropWhile_1 = dropWhile_1;
exports.dropWhile_2 = dropWhile_2;
exports.filter_1 = filter_1;
exports.filter_2 = filter_2;
exports.find_1 = find_1;
exports.map_square = map_square;
exports.isNumber = isNumber;
exports.map_1 = map_1;
exports.merge_1 = merge_1;
exports.merge_2 = merge_2;
exports.merge_3 = merge_3;
exports.merge_4 = merge_4;
exports.merge_5 = merge_5;
exports.merge_6 = merge_6;
exports.omit_1 = omit_1;
exports.omit_2 = omit_2;
exports.pick_1 = pick_1;
exports.pickBy_1 = pickBy_1;
exports.toPairs_1 = toPairs_1;
