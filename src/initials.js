import { pipe } from 'lodash/fp';

let input = ' TeXt    ';
let output = '<div>' + input.trim() + '</div>';
console.log('Output: ', output);

const trim = (str) => str.trim();
const wraps = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// Or use this function for composing the functions
const transform = pipe(trim, wraps, toLowerCase);

console.log('Transformed: ', transform(input));
