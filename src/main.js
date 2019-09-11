const yaml = require('js-yaml');
const fs   = require('fs');

let data, format;
try {
  data = yaml.safeLoad(fs.readFileSync('data.yml'));
  format = yaml.safeLoad(fs.readFileSync('format.yml'));
} catch (e) {
  console.log(e);
}

let entries = Object.entries(data);
for (let [heading, list] of entries) {
  console.log(fheading(format, heading));
  console.log(format.beforeList);
  for (let item of list) {
    let entries = flat(Object.entries(item)),
      key = entries[0],
      value = entries[1];
    console.log(fitem(format, key, value));
  }
  console.log(format.afterList);
}

function flat(xs) {
  return [].concat.apply([], xs);
}

/**
 * Format Heading
 * @param {Object} f format
 * @param {String} h heading
 */
function fheading(f, h) {
  return f.beforeHeading + h + f.afterHeading;
}

/**
 * Format item
 * @param {Object} f format
 * @param {String} key
 * @param {String} value
 */
function fitem(f, k, v) {
  let key = f.beforeKey + k + f.afterKey,
    value = f.beforeValue + v + f.afterValue;
  return f.beforeItem + key + ' ' + value + f.afterItem; 
}