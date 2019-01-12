const router = require('koa-router')()
const data = require('../public/data/index.json')

router.get('/', async (ctx, next) => {
  await ctx.render('index', data)
})

module.exports = router
