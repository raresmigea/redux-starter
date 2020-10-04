import { toLower, wrap } from 'lodash';
import { compose, pipe } from 'lodash/fp';

let input = '      TeXt     ';
let output = '<div>' + input.trim() + '</div>';
console.log('output: ', output);

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
const result = wrapInDiv(trim(input));
console.log('result: ', result);

// or use this function for composing the functions
const transform = pipe(trim, wrapInDiv, toLowerCase)(input);

console.log('transform: ', transform);
