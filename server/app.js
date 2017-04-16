/**
 * Created by huangpeisong on 2017/4/16.
 */
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

router.post('/api/log', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': 'login success'
  }
})
router.post('/api/log2', (ctx) => {
  ctx.body = {
    'type': 'error',
    'message': '你报错误的原因写一下'
  }
})

router.post('/api/reg1', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': 'register success'
  }
})

router.post('/api/reg2', (ctx) => {
  ctx.body = {
    'type': 'error',
    'message': '你报错误的原因写一下'
  }
})

router.get('/api/invitationCode', (ctx) => {
  ctx.body = {
    'type':'success',
    'message': '1234567890123456',
  }
})

router.post('/api/resetpassword', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '修改成功'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

