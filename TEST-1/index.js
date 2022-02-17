console.log('halo');
console.log(__dirname);
console.log(__filename);

const names = require("./module");
console.log(names.jasmine);
console.log(names.oky);
console.log(names);

const path = require('path');
const filePath = path.join('src', 'models', 'user.model');
console.log(filePath);
console.log(path.basename(filePath));
const cobaPath = path.join('masuk1', 'masuk2', 'disini');
console.log(cobaPath);