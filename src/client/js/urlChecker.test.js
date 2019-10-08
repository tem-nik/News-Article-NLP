import { checkURL } from './urlChecker';

describe('RegExp: URL', function () {
  it('should match the expected URL', function () {
    const urlRGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    const url = 'http://google.com/';
    expect(urlRGEX.test(url)).toBe(true);
  });
});