const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const doc = yaml.safeLoad(fs.readFileSync('data.yml'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
