import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');

console.log(111, 'its fine');
