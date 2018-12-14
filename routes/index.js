const router = require('koa-router')()
const { goodCar, goodDrink, goodHouse, goodLooking, goodPlay } = require('../assets/js/config.js')

router.get('/', async (ctx, next) => {
  ctx.body = ctx.headers['host']
})

router.get('/goodCar', async (ctx, next) => {
  await ctx.render('index', goodCar)
})

router.get('/goodDrink', async (ctx, next) => {
  await ctx.render('index', goodDrink)
})

router.get('/goodHouse', async (ctx, next) => {
  await ctx.render('index', goodHouse)
})

router.get('/goodLooking', async (ctx, next) => {
  await ctx.render('index', goodLooking)
})

router.get('/goodPlay', async (ctx, next) => {
  await ctx.render('index', goodPlay)
})

module.exports = router
