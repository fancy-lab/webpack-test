// import { name as bName } from './b';
console.log('Module A starting...');

import { name as CommonName } from './common';

// import './b';

import('./common').then(({name: CommonName}) => {
  console.log('common name from A:', CommonName);

  import('./b').then(({name: BName}) => {
    console.log('module B name:', BName);
  });
});

import _ from 'lodash';

console.log(_.get({n: 'a'}, 'n'), _.fp);

export const name = 'a';

const staticString = 'should not be involved in packed js' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafdafdsf' +
  '';

export const anotherString = 'anotherString should not be involved in packed js';


// console.log('this is module b name: ', bName);

export function showName() {
  return name;
}

const moduleObj = {
  test: 'test',
  notUsed: 'not used',
};

export default moduleObj;
