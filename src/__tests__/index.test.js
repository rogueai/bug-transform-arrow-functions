const babel = require('@babel/core');
const plugin = require('../');


it('should transform arrow function with spec: true', () => {
  let options = {
    presets: [
      ['@babel/env', {
        spec: true
      }]
    ],
    plugins: [plugin]
  };

  let input = `[].forEach(x => x)`;

  const {code} = babel.transform(input, options);
  expect(code).toMatchSnapshot();
});


it('should transform arrow function with spec: false', () => {
  let options = {
    presets: [
      ['@babel/env', {
        spec: false
      }]
    ],
    plugins: [plugin]
  };

  let input = `[].forEach(x => x)`;

  const {code} = babel.transform(input, options);
  expect(code).toMatchSnapshot();
});


