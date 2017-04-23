/**
 * Created by huangpeisong on 2017/4/16.
 */
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

router.post('/auth/login', (ctx) => {
  ctx.body = {
    type: 'success',
    message: 'login successfully'
  }
})
router.post('/auth/log2', (ctx) => {
  ctx.body = {
    'type': 'error',
    'message': '你报错误的原因写一下'
  }
})

router.post('/auth/register', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '注册成功'
  }
})

router.post('/auth/reg2', (ctx) => {
  ctx.body = {
    'type': 'error',
    'message': '你报错误的原因写一下'
  }
})

router.get('/auth/invitationCode', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '1234567890123456',
  }
})

router.post('/auth/resetpassword', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '修改成功'
  }
})

router.get('/auth/logout', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '登出成功'
  }
})

router.post('/auth/logout', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '登出成功'
  }
})
// 务必要双引号  不要用replace 要不万一用户 名字有个单引号就要出事了
router.get('/auth/getUser', (ctx) => {
  ctx.body = {
    'type': 'success',
    'message': '{"username": "xiaohong", "admin": "false"}'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

