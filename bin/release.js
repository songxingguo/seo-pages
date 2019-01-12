const { resolve, join } = require('path')
const {mkdir, writeFileSync} = require('fs');
const compileFile = require('pug').compileFile;
const ncp = require('ncp').ncp;

const path = './../pages/index.pug';
const data = require('../assets/data/index.json');

(function translateToHtml(path, {
  options = {},
  root = './dist/',
  prefix = './../../assets',
  fieldArr = ['pcUrl', 'mbUrl', 'QRCodeUrl'],
  dir = './../assets/',
  outdir = 'dist/'
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

  // 拷贝 styles 到 dist 目录
  ncp(resolve(__dirname, dir + 'styles/'), outdir + 'styles');
  // 拷贝 images 到 dist 目录
  ncp(resolve(__dirname, dir + 'images/'), outdir + 'images');
})(path, {options: data});
