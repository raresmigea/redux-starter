import { pipe } from 'lodash/fp';

let input = '      TeXt    ';
let output = '<div>' + input.trim() + '</div>';
console.log('output: ', output);

const trim = (str) => str.trim();
const wraps = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// or use this function for composing the functions
const transform = pipe(trim, wraps, toLowerCase);

console.log('transform: ', transform(input));
