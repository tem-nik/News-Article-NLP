import { checkURL } from './urlChecker';

describe('RegExp: URL', function () {
  it('should match the expected URL', function () {
    const urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    const urlTest = 'http://google.com/';
    expect(urlRGEX.test(urlTest)).toBe(true);
  });
});