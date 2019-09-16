// import './components/common';
console.log('main.ts starting...');

import('./components/a').then(({showName}) => {
  console.log('ModuleA showName:', showName());
});

import('./components/b').then(({showName}) => {
  console.log('ModuleB showName:', showName());
});

// import {showName} from './components/a';
// import _ from 'lodash-es';
import {size, assign, get} from 'lodash-es';
// import _ from 'lodash';

const a = /*#__PURE__*/assign({}, {a: 1});

console.log(get(a, 'a'));

// console.log('main.ts is running', _.size('abc'));
console.log('main.ts is running', size('abc'));
// console.log('main.ts is running', anotherString);

console.log('main.ts end...');
