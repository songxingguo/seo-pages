const { resolve, join } = require('path')
const { compileFile } = require('pug');
const {mkdir, writeFileSync} = require('fs');

const path = './../pages/index.pug';
const data = require('./../assets/data/index.json');

(function translateToHtml(path, {
  options = {},
  root = './dist/',
  prefix = './../../assets',
  fieldArr = ['pcUrl', 'mbUrl', 'QRCodeUrl']
} = {}) {
  // 创建根目录
  mkdir(join(root), function () {
    for(const item in options) {
      // 为数据中的路径添加前缀
      for (const field of fieldArr) {
        options[item][field] = prefix + options[item][field];
      }
      // 将 pug 转义成 html
      const html =  compileFile(resolve(__dirname, path))(options[item]);
      // 创建模块目录
      mkdir(join(root, item), function () {
        writeFileSync(join(root, item, '/index.html'), html)
      });
    }
  })
})(path, {options: data});
