const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('goodCars/index', {
    title: '好车多多',
    subtitle: '和你一样喜欢好车的人，也在这里',
    describe: '锦鲤多多，好运连连',
    pcUrl: '/images/pc-bg.jpg',
    mbUrl: '/images/mb-bg.jpg',
    QRCodeUrl: '/images/QR-code.png'
  })
})

module.exports = router
