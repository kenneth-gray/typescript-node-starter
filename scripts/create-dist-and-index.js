/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const DIST_FILEPATH = path.join(__dirname, '../dist');

fs.mkdirSync(DIST_FILEPATH);
fs.writeFileSync(path.join(DIST_FILEPATH, 'index.js'), '');
