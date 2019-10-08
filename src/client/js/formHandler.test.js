import { thisisFunc } from './formHandler';
import { checkURL } from "./urlChecker";


test("asyncFunction", () => {
  thisisFunc();
  expect.assertions(1);
  function thisisFunc(data) {
    expect(data).toBeUndefined();
  }
});

