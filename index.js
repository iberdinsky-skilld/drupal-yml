const yaml = require('drupal-yml/node_modules/js-yaml');
const fs = require('fs');

const read = filePath => {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(filePath));
    return doc;
  } catch (e) {
    console.log(e);
  }
};

export {read}
