# markdown-magic-engines
Print engine requirements from `package.json` via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
yarn add -D markdown-magic markdown-magic-engines
```

**Note:** [`markdown-magic`](https://github.com/DavidWells/markdown-magic) is a [peer dependency](https://docs.npmjs.com/files/package.json#peerdependencies) and must be installed separately from this module

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    ENGINES: require('./index.js'),
  },
};

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (ENGINES) -->
```js
console.log('hello world');
```
<!-- AUTO-GENERATED-CONTENT:END -->
