const fs = require('fs');
const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#092a5c"/><text x="16" y="22" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold" font-size="18">S</text></svg>';
fs.writeFileSync('SaiRagForm/public/favicon.svg', svg);
console.log('Done');