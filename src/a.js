export { default as a } from './b'

import _ from 'lodash-es';

console.log(_.get({n: 'a'}, 'n'));
