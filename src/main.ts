import {showName} from './components/a';
// import _ from 'lodash-es';
import {size, assign, get} from 'lodash-es';
// import _ from 'lodash';

const a = /*#__PURE__*/assign({}, {a: 1});

console.log(get(a, 'a'));

// console.log('main.ts is running', _.size('abc'));
console.log('main.ts is running', size('abc'));
// console.log('main.ts is running', anotherString);

console.log(showName());
