const { resolve, join } = require('path')
const {mkdir, writeFileSync, readdirSync, statSync} = require('fs');
const compileFile = require('pug').compileFile;
const ncp = require('ncp').ncp;

const entry = './../views/index.pug'; // 入口文件
const outdir = './dist/'; // 出口目录
const data = require('../public/data/index.json');
const fieldArr = ['pcUrl', 'mbUrl', 'QRCodeUrl'];

(function translate (entry, outdir,{
  options = {},
} = {}) {

  // addPrefix(data, fieldArr);

  translateToHtml(entry, outdir, {
    options: options
  });

  copyDir();
})(entry, outdir, {
  options: data
});

function translateToHtml (entry, outdir, {
  muduleName = '',
  options = {},
  fileName = 'index'
} = {}) {
  // 将 pug 转义成 html
  const html = compileFile(resolve(__dirname, entry))(options);

  if (!muduleName) {
    // 创建模块目录
    mkdir(join(outdir, muduleName), function () {
      writeFileSync(join(outdir, muduleName, '/' + fileName + '.html'), html)
    });
  } else {
    writeFileSync(join(outdir, '/' + fileName + '.html'), html)
  }
}

function addPrefix (options, fieldArr, prefix = './../../assets') {
  // 为数据中的路径添加前缀
  for (const field of fieldArr) {
    options[field] = prefix + options[field];
  }
}

function copyDir (dir = './public/', outdir = './dist/') {
  // 遍历所有子目录
  readdirSync(dir).forEach(function (file) {
    // 判断是否是目录
    if (statSync(join(dir, file)).isDirectory()) {
      // 创建根目录
      mkdir(join(outdir), function () {
        // 拷贝子目录
        ncp(resolve(dir, file), resolve(outdir, file));
      });
    }
  })
}
