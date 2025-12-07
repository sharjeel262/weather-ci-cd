const fs = require('fs');
const path = require('path');

function fail(msg){ console.error('TEST FAIL:', msg); process.exit(1); }
function pass(msg){ console.log('TEST PASS:', msg); }

const indexPath = path.join(__dirname, '../src/index.html');

if(!fs.existsSync(indexPath)) {
  fail('src/index.html does not exist');
}

const content = fs.readFileSync(indexPath,'utf8');
if(!content.includes('Weather App')) {
  fail('index.html does not contain "Weather App" heading');
}

pass('index.html exists and contains expected content');
