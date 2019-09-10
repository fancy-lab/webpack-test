import { name as bName } from './b';

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

console.log('this is module b name: ', bName);

export function showName() {
  return name;
}

const module = {
  test: 'test',
  notUsed: 'not used',
};

export default module;
