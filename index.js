const fs = require('fs');
const path = require('path');
const findup = require('findup');

function findPkg(dir) {
  try {
    return path.join(findup.sync(dir, 'package.json'), 'package.json');
  } catch (err) {
    console.log(err);
    throw new Error('No package.json file found');
  }
}

module.exports = function ENGINES(originalContent, options = {}, config) {
  let pkgPath;

  if (options && options.pkg) {
    pkgPath = path.resolve(path.dirname(config.originalPath), options.pkg);
  } else {
    pkgPath = findPkg(config.originalPath);
  }

  const { engines } = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  if (!engines) return originalContent;

  return Object.keys(engines)
    .map(name => `* **${name}**: ${engines[name]}`)
    .join('\n');
};
