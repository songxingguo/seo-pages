const router = require('koa-router')()
const {goodCar, goodDrink, goodHouse, goodLooking, goodPlay} = require('../public/data/index.json')

router.get('/', async (ctx, next) => {
  const {host} = ctx.headers
  const config = {
    'www.haochedd.com': goodCar,
    'www.haohedd.com': goodDrink,
    'www.haofangdd.com': goodHouse,
    'www.haokandd.com': goodLooking,
    'www.haowandd.com': goodPlay
  }[host] || goodCar
  await ctx.render('index', config)
})

module.exports = router
