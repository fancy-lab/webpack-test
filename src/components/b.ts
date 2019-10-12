// import { name as CommonName } from './common';
console.log('Module B starting...');

import('./common').then(({name: CommonName}) => {
  console.log('common name from B:', CommonName);
});
// import {name as CommonName} from './common';

// console.log('CommonName', CommonName);

export const name = 'b';

// console.log('common name from B:', CommonName);

export function showName() {
  return name;
}
