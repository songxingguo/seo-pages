const { resolve, dirname, extname, join } = require('path')
const pug = require('pug');
const {mkdir, writeFileSync} = require('fs');

const path = './../pages/index.pug';
const data = require('./../assets/data/index.json');

function translationMiddleware(path, { options } = {}) {
  mkdir('./dist', function () {
    for(const item in options) {
      const compileFile = pug.compileFile;
      const html =  compileFile(resolve(__dirname, path))(options[item]);

      mkdir(join('./dist/', item), function () {
        writeFileSync(join('./dist/', item, '/index.html'), html)
      });
    }
  });
}

translationMiddleware(path, {options: data});
