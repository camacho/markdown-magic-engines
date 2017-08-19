const format = require('./index.js');

describe('markdown-magic-engines', () => {
  it('renders engines from nearest package.json', () => {
    expect(format('foo', {}, { originalPath: __dirname })).toMatchSnapshot();
  });
});
